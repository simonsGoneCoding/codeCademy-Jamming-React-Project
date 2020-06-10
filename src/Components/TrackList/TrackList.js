import React from "react";
import "./TrackList.css";

import Track from "../Track/Track";

class TrackList extends React.Component {
  render() {
    if (this.props.tracks) {
      const tracksArr = this.props.tracks;
      return (
        <div className="TrackList">
          {tracksArr.map((track) => {
            return <Track key={track.id} track={track} />;
          })}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default TrackList;
