import React from "react";

class Follower extends React.Component {
  render() {
    return(
      <div className="follower">
        <img src={this.props.follower.avatar_url} />
        <a href={this.props.follower.html_url} target="_blank"><p>{this.props.follower.login}</p></a>
      </div>
    )
  }
}

export default Follower;