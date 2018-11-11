import React, { Component } from 'react';
import './styles.scss';

class ThemeSelector extends Component {
  render() {
    return(
      <>
        <div className="teamTheme">
          <button className="doom" onClick={(e) => this.props.update('doom')}>DOOM</button>
          <button className="acm" onClick={(e) => this.props.update('acm')}>ACM</button>
          <button onClick={(e) => this.props.update('none')}>RESET</button>
        </div>
      </>
    );
  }
}

export default ThemeSelector;
