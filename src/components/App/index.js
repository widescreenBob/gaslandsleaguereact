import React, { Component } from 'react';
import FactionSummary from '../FactionSummary';
import TeamDisplay from '../TeamDisplay';
import ThemeSelector from '../ThemeSelector';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      theme: localStorage.getItem("theme") || "default",
      activeFaction: localStorage.getItem("team") || "all",
      factions: [
        {
          name: "Disciples Of Omnipotent Madness",
          currentChampion: true,
          gamesPlayed: 0,
          gamesWon: 0,
          gamesLost: 0,
          points: 0
        },
        {
          name: "Anti Chrysler Method",
          currentChampion: false,
          gamesPlayed: 0,
          gamesWon: 0,
          gamesLost: 0,
          points: 0
        }
      ],
      teams:[
        {
          name: "Death Cab 4 Tevis",
          faction: "Anti Chrysler Method",
          teamAbv: "acm",
          sponsor:"The Warden",
          gamesPlayed: 0,
          cans: 0,
          garage:[
          ]
        },
        {
          name: "Big Slick Nation",
          faction: "Anti Chrysler Method",
          teamAbv: "acm",
          sponsor:"",
          gamesPlayed: 0,
          cans: 0,
          garage:[
          ]
        },
        {
          name: "C.R.U.M.P.L.E",
          faction: "Anti Chrysler Method",
          teamAbv: "acm",
          sponsor:"",
          gamesPlayed: 0,
          cans: 0,
          garage:[
          ]
        },
        {
          name: "Scions of Speed",
          champion: true,
          faction: "Disciples Of Omnipotent Madness",
          teamAbv: "doom",
          sponsor:"Rutherford",
          gamesPlayed: 0,
          cans: 0,
          garage:[
          ]
        },
        {
          name: "Mad Science",
          faction: "Disciples Of Omnipotent Madness",
          teamAbv: "doom",
          sponsor:"",
          gamesPlayed: 0,
          cans: 0,
          garage:[
          ]
        },
        {
          name: "Pickle Rickshawshank Redemption",
          faction: "Disciples Of Omnipotent Madness",
          teamAbv: "doom",
          sponsor:"",
          gamesPlayed: 0,
          cans: 0,
          garage:[
          ]
        }
      ]
    };
    this.changeActiveFaction = this.changeActiveFaction.bind(this)
    this.changeTheme = this.changeTheme.bind(this)
  }



  changeTheme(newValue) {
    localStorage.setItem("theme", newValue);
    this.setState(state => ({
      theme: newValue
    }));
  }

  changeActiveFaction(newValue) {
    localStorage.setItem("team", newValue);
    this.setState(state => ({
      activeFaction: newValue
    }));
  }

  render() {
    return (
      <>
      <div className={ `App ${this.state.theme}` }>
        <ThemeSelector update={this.changeTheme}/>
        <div className="current-champs">2018 Faction Champion: D.O.O.M. • 2018 Team Champion: Scions of Speed </div>
        <h1>2019 GAS LANDS LEAGUE</h1>
        <FactionSummary factions={this.state.factions} />
        <h2>TEAMS:</h2>
        <TeamDisplay teams={this.state.teams} active={this.state.activeFaction} updated={this.changeActiveFaction}/>
      </div>
      </>
    );
  }
}

export default App;
