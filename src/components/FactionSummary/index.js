import React, { Component } from 'react';
import './styles.scss';
import AntiLogo from '../AntiLogo/antiLogo.svg';
import DiscipleLogo from '../DiscipleLogo/discipleLogo.svg';

class FactionSummary extends Component {
  render() {
    return(
      <>
        <div className="team-summary__container">
          {this.props.factions.map((faction, index) => (
            <>
              {faction.name === 'Disciples Of Omnipotent Madness' && <img src={DiscipleLogo} className="doomLogo logo" alt="logo" /> }
            </>
          ))}
          <h2 className="team-summary__vs">vs.</h2>
          {this.props.factions.map((faction, index) => (
            <>
              {faction.name === 'Anti Chrysler Method' && <img src={AntiLogo} className="acmLogo logo" alt="logo" /> }
            </>
          ))}
        </div>
        <div className="team-summary__scores">
          <h2 className="team-summary__score-title">SCORES</h2>
          <div class="team-summary__scores-container">
            {this.props.factions.map((faction, index) => (
              <>
                <div className="team-summary__scores-inner">
                  <h3 className="team-summary__scores-name">{faction.name}</h3>
                  <p className="record">WINS: {faction.gamesWon} LOSSES: {faction.gamesLost}</p>
                  <div className="points-container">
                    <div className="points-text">POINTS</div>
                    <div className="points">{faction.points}</div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    )
  }
}
export default FactionSummary;