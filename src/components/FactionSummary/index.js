import React, { Component } from 'react';
import './styles.scss';
import AntiLogo from '../AntiLogo/antiLogo.svg';
import DiscipleLogo from '../DiscipleLogo/discipleLogo.svg';

class FactionSummary extends Component {
  render() {
    return(
      <>
        <div className="team-summary__container">
          {this.props.factions.map((faction) => (
            <>
              {faction.name === 'Disciples Of Omnipotent Madness' && <img src={DiscipleLogo} className="doomLogo logo" alt="logo" key={faction.name}/> }
            </>
          ))}
          <h2 className="team-summary__vs">vs.</h2>
          {this.props.factions.map((faction) => (
            <>
              {faction.name === 'Anti Chrysler Method' && <img src={AntiLogo} className="acmLogo logo" alt="logo" key={faction.name}/> }
            </>
          ))}
        </div>
        <div className="team-summary__scores">
          <h2 className="team-summary__score-title">SCORES</h2>
          <div className="team-summary__scores-container">
            {this.props.factions.map((faction, index) => (
              <>
                <div className="team-summary__scores-inner" key={faction.points + index}>
                  <h3 className="team-summary__scores-name">{faction.name}</h3>
                  <div className="points-container">
                    <div className="points-text">POINTS</div>
                    <div className="points">{faction.points}</div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="team-summary__results">
            <h2 className="team-summary__results-title">RESULTS</h2>
            {this.props.results.map((result, index) => (
              <>
                <ul className="team-summary__results-inner" key={result.week + index}>
                  <li className="team-summary__results-item">
                  <span className="results-week">WK:{result.week}</span>
                    <span className="result-one">{result.teamOneName} {result.teamOneScore}</span>
                    •
                    <span className="result-two">{result.teamTwoName} {result.teamTwoScore}</span>
                  </li>
                </ul>
              </>
            ))}
          </div>
      </>
    )
  }
}
export default FactionSummary;