import React from "react";

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
      .then(json => this.setState({tunes: json.feed.entry}));
  }

  render() {
    return (
      <p>Chart Box</p>
    )
  }

}







export default ChartBox;
