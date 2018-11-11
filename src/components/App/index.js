import React, { Component } from 'react';
import FactionSummary from '../FactionSummary';
import TeamDisplay from '../TeamDisplay';
import ThemeSelector from '../ThemeSelector';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      theme: "default",
      activeFaction: "all",
      factions: [
        {
          name: "Disciples Of Omnipotent Madness",
          gamesPlayed: 2,
          gamesWon: 1,
          gamesLost: 1,
          points: 30
        },
        {
          name: "Anti Chrysler Method",
          gamesPlayed: 2,
          gamesWon: 1,
          gamesLost: 1,
          points: 30
        }
      ],
      teams:[
        {
          name: "Death Cab 4 Tevis",
          faction: "Anti Crysler Method",
          teamAbv: "acm",
          gamesPlayed: 1,
          cans: 6,
          garage:[
            'car one',
            'car two',
            'car three'
          ]
        },
        {
          name: "Big Slick Nation",
          faction: "Anti Crysler Method",
          teamAbv: "acm",
          gamesPlayed: 1,
          cans: 6,
          garage:[
            'car one',
            'car two',
            'car three'
          ]
        },
        {
          name: "Psions of Speed",
          faction: "Disciples Of Omnipotent Madness",
          teamAbv: "doom",
          gamesPlayed: 1,
          cans: 5,
          garage:[
            'car one',
            'car two',
            'car three'
          ]
        },
        {
          name: "Clan of Walt",
          faction: "Disciples Of Omnipotent Madness",
          teamAbv: "doom",
          gamesPlayed: 1,
          cans: 8,
          garage:[
            'car one',
            'car two',
            'car three'
          ]
        },
        {
          name: "Pickle Rickshawshank Redemption",
          faction: "Disciples Of Omnipotent Madness",
          teamAbv: "doom",
          gamesPlayed: 1,
          cans: 10,
          garage:[
            'car one',
            'car two',
            'car three'
          ]
        }
      ]
    };
    this.changeActiveFaction = this.changeActiveFaction.bind(this)
    this.changeTheme = this.changeTheme.bind(this)
  }



  changeTheme(newValue) {
    this.setState(state => ({
      theme: newValue
    }));
  }

  changeActiveFaction(newValue) {
    this.setState(state => ({
      activeFaction: newValue
    }));
  }

  render() {
    return (
      <>
      <div className={ `App ${this.state.theme}` }>
        <ThemeSelector update={this.changeTheme}/>
        <h1>2018 GAS LANDS LEAGUE</h1>
        <FactionSummary factions={this.state.factions} />
        <h2>TEAMS:</h2>
        <TeamDisplay teams={this.state.teams} active={this.state.activeFaction} updated={this.changeActiveFaction}/>
      </div>
      </>
    );
  }
}

export default App;
