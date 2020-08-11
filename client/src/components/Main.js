import React, { Component } from 'react';
import avatar from '../components/img/green_mountain_logo_512.png';


class Main extends Component {
  render() {
    return(
      <div id="main" className='main-section'>
        <div className="col-xs-12 center-block text-center">
          <div className="py-3"><h2>Andrew Thomas</h2></div>
            <img src={avatar} alt="avatar" />
          <div className="py-3"><h3>Full Stack Web Developer</h3></div>
        </div>
      </div>
    );
  }
};

export default Main;