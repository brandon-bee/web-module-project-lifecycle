import React from "react";
import Follower from "./Follower";

class FollowerList extends React.Component {
  render() {
    return(
      <div className="followers">
        {
          this.props.followers.map((follower, idx) => {
            return(
              <Follower key={idx} follower={follower} />
            )
          })
        }
      </div>
    )
  }
}

export default FollowerList;