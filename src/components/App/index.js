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
          gamesPlayed: 5,
          gamesWon: 2,
          gamesLost: 3,
          points: 70
        },
        {
          name: "Anti Chrysler Method",
          gamesPlayed: 5,
          gamesWon: 2,
          gamesLost: 3,
          points: 70
        }
      ],
      teams:[
        {
          name: "Death Cab 4 Tevis",
          faction: "Anti Chrysler Method",
          teamAbv: "acm",
          gamesPlayed: 5,
          cans: 25,
          garage:[
            'Jeep Apnea',
            'Lamb Bikini',
            'James Van Der Beek 5Head',
            'Coach McGirks Advice -- RIP',
            'Nuke Em High Field Trip To Hell'
          ]
        },
        {
          name: "Big Slick Nation",
          faction: "Anti Chrysler Method",
          teamAbv: "acm",
          gamesPlayed: 3,
          cans: 28,
          garage:[
            'Oil Cut You Good',
            'Sticky Icky',
            'Dodge This Ram 0',
            'The Chevelle Wears Prada'
          ]
        },
        {
          name: "C.R.U.M.P.L.E",
          faction: "Anti Chrysler Method",
          teamAbv: "acm",
          gamesPlayed: 2,
          cans: 23,
          garage:[
            'F.U.C.K.D'
          ]
        },
        {
          name: "Scions of Speed",
          faction: "Disciples Of Omnipotent Madness",
          teamAbv: "doom",
          gamesPlayed: 4,
          cans: 41,
          garage:[
            'Flip Wilson',
            'Speed Buggy',
            'Stan the Man 0',
            'Slap Dash 0'
          ]
        },
        {
          name: "Mad Science",
          faction: "Disciples Of Omnipotent Madness",
          teamAbv: "doom",
          gamesPlayed: 2,
          cans: 8,
          garage:[
            'Doom Bus'
          ]
        },
        {
          name: "Pickle Rickshawshank Redemption",
          faction: "Disciples Of Omnipotent Madness",
          teamAbv: "doom",
          gamesPlayed: 1,
          cans: 23,
          garage:[
            'Destroy-ota Corolla'
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
