import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { 
    potato: "yes",
    factions: [
      {
        name: "DOOM",
        gamesPlayed: 1,
        gamesWon: 1,
        gamesLost: 0,
        points: 20
      },
      {
        name: "ACM",
        gamesPlayed: 1,
        gamesWon: 0,
        gamesLost: 1,
        points: 10
      }
    ]

  };

  render() {
    return (
      <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
      </header>
      <body>
        {this.state.factions.map((faction, index) => (
          <div>
          <p>{faction.name}</p>
          <p>{faction.gamesWon} and {faction.gamesLost}</p>
          </div>
        ))}
      </body>
      </div>
      </>
    );
  }
}

export default App;
