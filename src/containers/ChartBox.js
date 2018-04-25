import React from "react";
import ChartList from "../components/ChartList.js";

class ChartBox extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        tunes: []
      }
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then(response => response.json())
        .then(json => this.setState({tunes: json.feed.entry}))
      // .then(json => console.log(json.feed.entry));
  }

  render() {
    return (
      <ChartList topTwenty={this.state.tunes}/>
    )
  }

}







export default ChartBox;
