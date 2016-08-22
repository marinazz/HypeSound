import React, { Component } from 'react';
import './Track.css';

class Track extends Component {

  handlePlay = (evt) => {
    evt.stopPropagation();
    stream = new Audio();
    console.log(this.props);
    stream.src = this.props.trackPlayUrl + '?client_id=1cb40d68cdbee5220da3784cb165b512';
    stream.play();
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePlay}>▶</button>
        {this.props.trackName}
      </div>
    );
  }
}



export default Track;
