import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
  render() {
    return(
      <div className="followers">
        <Follower />
        <Follower />
      </div>
    )
  }
}

export default FollowerList;