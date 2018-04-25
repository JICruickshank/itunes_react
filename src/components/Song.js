import React from "react";

const Song = (props) => {
  return (
    <React.Fragment>
      <p>{props.position} {props.title}</p>
      <p>{props.artist.toUpperCase()}</p>
    </React.Fragment>
  )
}


export default Song;
