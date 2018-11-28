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
          gamesPlayed: 3,
          gamesWon: 1,
          gamesLost: 2,
          points: 40
        },
        {
          name: "Anti Chrysler Method",
          gamesPlayed: 3,
          gamesWon: 2,
          gamesLost: 1,
          points: 50
        }
      ],
      teams:[
        {
          name: "Death Cab 4 Tevis",
          faction: "Anti Crysler Method",
          teamAbv: "acm",
          gamesPlayed: 3,
          cans: 15,
          garage:[
            'Jeep Apnea',
            'Lamb Bikini',
            'James Van Der Beek 5Head',
            'Coach McGirks Advice -- RIP'
          ]
        },
        {
          name: "Big Slick Nation",
          faction: "Anti Crysler Method",
          teamAbv: "acm",
          gamesPlayed: 2,
          cans: 23,
          garage:[
            'Oil Cut You Good',
            'Sticky Icky',
            'Dodge This Ram'
          ]
        },
        {
          name: "C.R.U.M.P.L.E",
          faction: "Anti Crysler Method",
          teamAbv: "acm",
          gamesPlayed: 1,
          cans: 5,
          garage:[
            'F.U.C.K.D'
          ]
        },
        {
          name: "Scions of Speed",
          faction: "Disciples Of Omnipotent Madness",
          teamAbv: "doom",
          gamesPlayed: 3,
          cans: 15,
          garage:[
            'Flip Wilson',
            'Speed Buggy',
            'Stan the Man'
          ]
        },
        {
          name: "Mad Science",
          faction: "Disciples Of Omnipotent Madness",
          teamAbv: "doom",
          gamesPlayed: 1,
          cans: 3,
          garage:[
            'Doom Bus'
          ]
        },
        {
          name: "Pickle Rickshawshank Redemption",
          faction: "Disciples Of Omnipotent Madness",
          teamAbv: "doom",
          gamesPlayed: 1,
          cans: 10,
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
