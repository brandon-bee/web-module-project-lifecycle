import React from 'react';

class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Github Card</h1>
        <form>
          <input placeholder="Github Username" />
          <button>Search</button>
        </form>
        <div className="userCard">
          <img src="https://avatars.githubusercontent.com/u/64279000?v=4" />
          <a href="https://github.com/brandon-bee" target="_blank"><h3>Brandon Booth</h3></a>
          <p>(brandon-bee)</p>
          <p>Total Repos: 51</p>
          <p>Total Followers: 10</p>
        </div>
        <div className="followers">
          <div className="follower">
            <img src="https://avatars.githubusercontent.com/u/22600370?v=4" />
            <a href="https://github.com/maidiance" target="_blank"><p>maidiance</p></a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
