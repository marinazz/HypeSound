import React, { Component } from 'react';
import './App.css';
import Sort from './Sort'
import Track from './Track'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>HypeSound</h2>
        </div>
        <p className="App-intro">
        </p>

        <div>Sort by:
        Popularity
        </div>

        <Sort/>

        <Track trackName="▶ Roog - Buzzin' (Original Mix) (Simma Black)"/>
        <Track trackName='▶ 5 Tracks To Say Goodbye: Tristen "Current"'/>

      </div>
    );
  }
}

export default App;
