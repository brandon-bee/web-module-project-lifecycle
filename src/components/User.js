/* eslint-disable react/prop-types */
import React from "react";

class User extends React.Component {
  render() {
    return(
      <div className="userCard">
        <img src={this.props.user.avatar_url} />
        <a href={this.props.user.html_url} target="_blank"><h3>{this.props.user.name}</h3></a>
        <p>({this.props.user.login})</p>
        <p>Total Repos: {this.props.user.public_repos}</p>
        <p>Total Followers: {this.props.user.followers}</p>
      </div>
    )
  }
}

export default User;