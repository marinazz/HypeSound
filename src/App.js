import React, { Component } from 'react';
import './App.css';
import Sort from './Sort'
import Track from './Track'
import Image from "./stock-photo-144942421.jpg"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {trackList:{collection: []}};
  }
  render() {
    return (
      <div className="App" style={{backgroundImage: 'url('+Image+')'}}>
        <div style={{position: 'relative', zIndex: 1}}>
          <img src={Image} style={{position: 'absolute', zIndex: 2}} />
          <div style={{position: 'absolute', zIndex: 3, background: "#a0a0a0", opacity: 0.4, top: 0, left: 0, right: 0, bottom: 0}}></div>
          <div id="overlay_text" style={{position: 'relative', top: -10, zIndex: 4}}>
            <div className="App-header">
              <h2>
              <img className="App-imageHeader" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDc1LjA4MiA0NzUuMDgxIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NzUuMDgyIDQ3NS4wODE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNDU1Ljk1NSwxNjkuODc2Yy0xMi43NjUtMjYuNjQ3LTI5Ljc5My00OS43MjYtNTEuMTA2LTY5LjIzNGMtMjEuMzItMTkuNTA4LTQ2LjY0NC0zNS4wNzItNzUuOTUxLTQ2LjY4MiAgIHMtNTkuNzU4LTE3LjQxNi05MS4zNTgtMTcuNDE2Yy0zMS41OTUsMC02Mi4wNDcsNS44MDktOTEuMzU5LDE3LjQxNmMtMjkuMzE0LDExLjYwNi01NC42MjYsMjcuMTctNzUuOTQ2LDQ2LjY4MiAgIHMtMzguMzU0LDQyLjU4Ny01MS4xMDYsNjkuMjM0QzYuMzc1LDE5Ni41MjYsMCwyMjQuMjIyLDAsMjUyLjk1NWMwLDMxLjYwMSw1LjcwOCw2MS40ODMsMTcuMTI5LDg5LjY1NGw1LjcxMiwxMy45OWw1Mi44MTcsOS40MTcgICBjNC4xODcsMTUuNzk3LDEyLjgwMSwyOC43ODcsMjUuODQxLDM4Ljk3MmMxMy4wMzUsMTAuMTc4LDI3LjkyOCwxNS4yNyw0NC42OCwxNS4yN3Y5LjEzOGMwLDIuNjYyLDAuODU0LDQuODUzLDIuNTY4LDYuNTYzICAgYzEuNzEzLDEuNzExLDMuOTAzLDIuNTcsNi41NjcsMi41N2gxOC4yNzFjMi42NjMsMCw0Ljg1My0wLjg1OSw2LjU2Ny0yLjU3YzEuNzA5LTEuNzExLDIuNTY4LTMuOTAxLDIuNTY4LTYuNTYzVjI2NC45NDMgICBjMC0yLjY2Ni0wLjg1NS00Ljg1NS0yLjU2OC02LjU2N2MtMS43MTUtMS43MTEtMy45MDUtMi41NjYtNi41NjctMi41NjZoLTE4LjI3MWMtMi42NjcsMC00Ljg1NCwwLjg1NS02LjU2NywyLjU2NiAgIGMtMS43MTQsMS43MTItMi41NjgsMy45MDEtMi41NjgsNi41Njd2OS4xMzRjLTEzLjUxOCwwLTI1Ljg4NywzLjM4MS0zNy4xMTksMTAuMTRjLTExLjIzMSw2Ljc1Mi0yMC4wOCwxNS44NDItMjYuNTUyLDI3LjI2NSAgIGwtMTkuNDE3LTMuNDI5Yy01LjUxNS0xOC4wOS04LjI3Ni0zNi40NTMtOC4yNzYtNTUuMTA3YzAtMjguMTY4LDguMzcyLTU0LjcxOSwyNS4xMjItNzkuNjUyICAgYzE2Ljc1MS0yNC45MzQsMzkuMjU5LTQ0LjgyNyw2Ny41MjQtNTkuNjcxYzI4LjI2NS0xNC44NDUsNTguMjkxLTIyLjI2Niw5MC4wNzgtMjIuMjY2YzMxLjc3OCwwLDYxLjgxMiw3LjQyMSw5MC4wNzgsMjIuMjY2ICAgYzI4LjI2OCwxNC44NDQsNTAuNzcxLDM0LjczNyw2Ny41MjYsNTkuNjcxYzE2Ljc0OCwyNC45MzQsMjUuMTI2LDUxLjQ4NCwyNS4xMjYsNzkuNjUyYzAsMTguNjU0LTIuNzU5LDM3LjAxOC04LjI3NSw1NS4xMDcgICBsLTE5LjQyMSwzLjQzMmMtNi40NzgtMTEuNDI2LTE1LjMyNC0yMC41MDktMjYuNTQ5LTI3LjI2NGMtMTEuMjMxLTYuNzU5LTIzLjYwOS0xMC4xNDQtMzcuMTItMTAuMTQ0di05LjEzICAgYzAtMi42NjYtMC44NTMtNC44NTYtMi41Ny02LjU2N2MtMS43MDctMS43MDgtMy44OTctMi41Ny02LjU2My0yLjU3aC0xOC4yNzRjLTIuNjYyLDAtNC44NTMsMC44NjItNi41NjMsMi41NyAgIGMtMS43MTUsMS43MTEtMi41NywzLjkwMS0yLjU3LDYuNTY3djE2NC40NTVjMCwyLjY2MiwwLjg1NSw0Ljg1MywyLjU3LDYuNTYzYzEuNzExLDEuNzExLDMuOTAxLDIuNTcsNi41NjMsMi41N2gxOC4yNzQgICBjMi42NjYsMCw0Ljg1Ni0wLjg1OSw2LjU2My0yLjU3YzEuNzE4LTEuNzExLDIuNTctMy45MDEsMi41Ny02LjU2M3YtOS4xMzhjMTYuNzQ4LDAsMzEuNjQyLTUuMDkyLDQ0LjY4LTE1LjI3ICAgYzEzLjA0Mi0xMC4xODUsMjEuNjUyLTIzLjE3NSwyNS44MzctMzguOTcybDUyLjgxOC05LjQxOGw1LjcxNS0xMy45ODljMTEuNDE2LTI4LjE3MSwxNy4xMjgtNTguMDU0LDE3LjEyOC04OS42NTMgICBDNDc1LjA4MiwyMjQuMjIyLDQ2OC43MDksMTk2LjUyNiw0NTUuOTU1LDE2OS44NzZ6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />
              HypeSound</h2>
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
