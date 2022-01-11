import React from "react";

class User extends React.Component {
  render() {
    return(
      <div className="userCard">
        <img src="https://avatars.githubusercontent.com/u/64279000?v=4" />
        <a href="https://github.com/brandon-bee" target="_blank"><h3>Brandon Booth</h3></a>
        <p>(brandon-bee)</p>
        <p>Total Repos: 51</p>
        <p>Total Followers: 10</p>
      </div>
    )
  }
}

export default User;