import React from "react";
import Song from "./Song.js";

const ChartList = (props) => {

  const songNodes = props.topTwenty.map((song, index) => {
    return (
      <li key={index}>
        <Song
          title={song["im:name"]["label"]}
          artist={song["im:artist"]["label"]}
          position={index + 1}
          key={index}/>
      </li>
    )
  })
  return (
    <div id="charts">
      <ul>
        {songNodes}
      </ul>

   </div>
  );
};




export default ChartList;
