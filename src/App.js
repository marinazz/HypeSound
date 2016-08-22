import React, { Component } from 'react';
import './App.css';
import Sort from './Sort'
import Track from './Track'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {trackList:{collection: []}};
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>HypeSound</h2>
        </div>
        <p className="App-intro">
        </p>

        <div className="App-content">

          <div className="App-sort">
          Sort by:
          <Sort/>
          </div>

          <div className="App-sort">
          {this.state.trackList.collection.map((track) => (<Track trackName={track.origin.title} trackPlayUrl={track.origin.stream_url}/>))}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    SC.connect().then(() => {
      return SC.get('/me/activities/tracks/affiliated');
    }).then(me => {
      this.setState({trackList: me});
    });
  }
}

export default App;
