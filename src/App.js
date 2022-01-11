import React from 'react';
import axios from "axios";
import User from "./components/User";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  state = {
    currentUser: "brandon-bee",
    user: {},
    followers: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(resp => {
        this.setState({
          ...this.state,
          user: resp.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.user !== prevState.user) {
      axios.get(`https://api.github.com/users/${this.state.currentUser}/followers`)
        .then(resp => {
          this.setState({
            ...this.state,
            followers: resp.data
          })
        })
        .catch(err => {
          console.log(err);
        })
    };
  }

  handleChange = evt => {
    this.setState({
      ...this.state,
      currentUser: evt.target.value
    });
  }

  handleSubmit = evt => {
    evt.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.currentUser}`)
      .then(resp => {
        this.setState({
          ...this.state,
          user: resp.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return(
      <div className="appContainer">
        <h1>Github Card</h1>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Github Username" onChange={this.handleChange} />
          <button>Search</button>
        </form>
        <User user={this.state.user} />
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
