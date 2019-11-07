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
          points: 0
        },
        {
          name: "Anti Chrysler Method",
          currentChampion: false,
          gamesPlayed: 0,
          points: 0
        }
      ],
      results:[
        {
          week:"1",
          teamOneName:"D.O.O.M.",
          teamTwoName:"A.C.M",
          teamOneScore:"0",
          teamTwoScore:"0"
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
            {
              car: "Warden Norton",
              status: 1
            },
            {
              car: "Warden Hennessey",
              status: 1
            },
            {
              car: "Warden Hazen",
              status: 1
            },
            {
              car: "Col. Winter",
              status: 1
            }
          ]
        },
        {
          name: "Dank Zapper",
          faction: "Anti Chrysler Method",
          teamAbv: "acm",
          sponsor:"Mishkin",
          gamesPlayed: 0,
          cans: 0,
          garage:[
            {
              car: "Resistance is Futile",
              status: 1
            },
            {
              car: "Tell Me Watt Hertz",
              status: 1
            }
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
          name: "Let's Get Technical",
          champion: true,
          faction: "Disciples Of Omnipotent Madness",
          teamAbv: "doom",
          sponsor:"Rutherford",
          gamesPlayed: 0,
          cans: 0,
          garage:[
            {
              car: "Truck You",
              status: 1
            }
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
          sponsor:"Maxxine",
          gamesPlayed: 0,
          cans: 0,
          garage:[
            {
              car: "Destroyota 2.0",
              status: 1
            }
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
        <FactionSummary factions={this.state.factions} results={this.state.results}/>
        <h2>TEAMS:</h2>
        <TeamDisplay teams={this.state.teams} active={this.state.activeFaction} updated={this.changeActiveFaction}/>
      </div>
      </>
    );
  }
}

export default App;
