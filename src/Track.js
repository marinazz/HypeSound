import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {play: false};
  }

  handlePlay = (evt) => {
    evt.stopPropagation();
    stream = new Audio();
    console.log(this.props);
    stream.src = this.props.trackPlayUrl + '?client_id=1cb40d68cdbee5220da3784cb165b512';
    stream.play();
    this.setState({play: true});
    this.stream = stream;
  }

  handlePause = (evt) => {
    evt.stopPropagation();
    this.stream.pause();
    this.setState({play: false});
  }

  render() {
    return (
      <div>
        {!this.state.play ? <button onClick={this.handlePlay} className="Track-button">▶</button>
        : <button onClick={this.handlePause} className="Track-button">⏸</button>}
        {this.props.trackName}
      </div>
    );
  }
}



export default Track;
