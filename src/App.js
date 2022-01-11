import React from 'react';
import User from "./components/User";
import FollowerList from "./components/FollowerList";

class App extends React.Component {
  render() {
    return(
      <div className="appContainer">
        <h1>Github Card</h1>
        <form>
          <input placeholder="Github Username" />
          <button>Search</button>
        </form>
        <User />
        <FollowerList />
      </div>
    );
  }
}

export default App;
