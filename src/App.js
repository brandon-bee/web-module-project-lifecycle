import React from 'react';
import User from "./components/User";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  state = {
    currentUser: "brandon-bee",
    user: {
      avatar_url: "https://avatars.githubusercontent.com/u/64279000?v=4",
      html_url: "https://github.com/brandon-bee",
      name: "Brandon B.",
      login: "brandon-bee",
      public_repos: 51,
      followers: 10,
    },
    followers: [
      {
        avatar_url: "https://avatars.githubusercontent.com/u/22600370?v=4",
        html_url: "https://github.com/maidiance",
        login: "maidiance"
      },
      {
        avatar_url: "https://avatars.githubusercontent.com/u/55255486?v=4",
        html_url: "https://github.com/Marcel-rodriguez",
        login: "Marcel-rodriguez"
      }
    ]
  }

  render() {
    return(
      <div className="appContainer">
        <h1>Github Card</h1>
        <form>
          <input placeholder="Github Username" />
          <button>Search</button>
        </form>
        <User user={this.state.user} />
        <FollowerList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
