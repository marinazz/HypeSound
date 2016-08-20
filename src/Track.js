import React, { Component } from 'react';
import './Track.css';

class Track extends Component {
  render() {
    return (
      <div>
        {this.props.trackName}
      </div>
    )
  }
}



export default Track
