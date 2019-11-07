import React, { Component } from 'react';
import './styles.scss';

class TeamDisplay extends Component {
  render() {
    return(
      <>
        <div className="team-display__button-container">
          <button className="team-display__button" onClick={(e) => this.props.updated('all')}>All</button>
          <button className="team-display__button" onClick={(e) => this.props.updated('Disciples Of Omnipotent Madness')}>DOOM</button>
          <button className="team-display__button" onClick={(e) => this.props.updated('Anti Chrysler Method')}>ACM</button>
        </div>
        <div className="team-display__container">
          { this.props.active === 'all' ?  
            <>
              {this.props.teams.map((team, index) => (
                <div {...index} className="team" key={team.name}>
                  <h3 className={`team__heading team__${team.teamAbv} ${team.champion ? "team__current-champ " : ""}`}>{team.name}</h3>
                  <p className="team__current-can">Current Cans:  {team.cans}</p>
                  {  team.sponsor.length > 0 &&
                        <p className="team__sponsor">Current Sponsor: <span>{team.sponsor}</span></p>
                  }
                </div>
              ))}
            </>
          :
            <>
              {this.props.teams.map((team, index) => (
                <>
                  { team.faction === this.props.active && 
                    <div {...index} className="team">
                      <h3 className={`team__heading team__${team.teamAbv} ${team.champion ? "team__current-champ " : ""}`}>{team.name}</h3>
                      {team.sponsor.length > 0 &&
                        <p className="team__sponsor">Current Sponsor: <span>{team.sponsor}</span></p>
                      }
                      <p className="team__current-can">Current Cans:  {team.cans}</p>
                      {team.garage.length > 0 && (
                      <div className="team__garage-container">
                        <p className="team__garage">Cars in garage:</p>
                          <ul className="team__garage-list">
                          {team.garage.map((car, index) => (
                            <>
                              <li className="team__garage-list-car"{...index}>
                                <span className={"team__garage-car-name" + (car.status ? ' alive' : ' dead')}>{car.car}</span>
                              </li>
                            </>
                          ))}
                        </ul>
                      </div>)}
                    </div>
                  }
                </>
              ))}
            </>
          }
        </div>
      </>
    )
  }
}
export default TeamDisplay;