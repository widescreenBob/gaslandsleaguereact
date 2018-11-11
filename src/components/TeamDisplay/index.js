import React, { Component } from 'react';
import './styles.scss';

class TeamDisplay extends Component {
  render() {
    return(
      <>
        <div className="team-display__button-container">
          <button className="team-display__button" onClick={(e) => this.props.updated('all')}>All</button>
          <button className="team-display__button" onClick={(e) => this.props.updated('Disciples Of Omnipotent Madness')}>DOOM</button>
          <button className="team-display__button" onClick={(e) => this.props.updated('Anti Crysler Method')}>ACM</button>
        </div>
        <div className="team-display__container">
          { this.props.active === 'all' ?  
            <>
              {this.props.teams.map((team, index) => (
                <div {...index} className="team">
                  <h3 className={`team__heading team__${team.teamAbv}`}>{team.name}</h3>
                  <p className="team__faction">{team.faction}</p>
                  <p className="team__current-can">Current Cans:  {team.cans}</p>
                </div>
              ))}
            </>
          :
            <>
              {this.props.teams.map((team, index) => (
                <>
                  { team.faction === this.props.active && 
                    <div {...index} className="team">
                      <h3 className={`team__heading team__${team.teamAbv}`}>{team.name}</h3>
                      <p className="team__faction">{team.faction}</p>
                      <p className="team__current-can">Current Cans:  {team.cans}</p>
                      <p className="team__garage">Cars in garage:</p>
                      <ul className="team__garage-list">
                        {team.garage.map((car, index) => (
                          <>
                            <p{...index}>
                              {car}
                            </p>
                          </>
                        ))}
                      </ul>
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