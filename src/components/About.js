import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{ faCoffee } from '@fortawesome/free-solid-svg-icons'


class About extends Component {
  render() {
    return (

      <section className="overview-section p-3 p-lg-5" id="about">
        <div className="container py-3">
          <h2 className="section-title mb-3">Experience</h2>
          <div className="section-intro mb-5">Sustainable banh mi street art semiotics health goth vice. Af deep v gluten-free neutra, etsy vice pabst subway tile prism meh hot chicken unicorn kogi austin <a href="resume.html">online resume</a> and <a href="portfolio.html">project portfolio</a>.</div>
          <div className="row">
            <div className="item col-6 col-lg-4">
              <div className="item-inner">
                <div className="item-icon"><i id="js"/> <FontAwesomeIcon icon={faCoffee}/> </div>
                <h3 className="item-title">Vanilla JavaScript</h3>
                <div className="item-desc">Mumblecore umami trust fund, butcher fashion axe banjo normcore freegan fam keytar disrupt. Taiyaki echo park chartreuse PBR&amp;B vice freegan leggings raclette yuccie..</div>
              </div>{/*//item-inner*/}
            </div>{/*//item*/}
            <div className="item col-6 col-lg-4">
              <div className="item-inner">
                <div className="item-icon"><i id="node"/> <FontAwesomeIcon icon={faCoffee}/></div>
                <h3 className="item-title">Node.js</h3>
                <div className="item-desc">Wolf vice dreamcatcher vinyl salvia pickled helvetica slow-carb small batch. Hammock brunch everyday carry mumblecore, fingerstache pitchfork photo booth.</div>
              </div>{/*//item-inner*/}
            </div>{/*//item*/}
            <div className="item col-6 col-lg-4">
              <div className="item-inner">
                <div className="item-icon"><i id="html"/> <FontAwesomeIcon icon={faCoffee}/> <i id="css"/> <FontAwesomeIcon icon={faCoffee}/> </div>
                <h3 className="item-title">HTML &amp; CSS</h3>
                <div className="item-desc">Mixtape bicycle rights la croix art party fam etsy portland chartreuse af venmo stumptown church-key. Cliche etsy crucifix portland coloring book.</div>
              </div>{/*//item-inner*/}
            </div>{/*//item*/} 
          </div>{/*//row*/}  
        </div>{/*//container*/}
      </section>
    );
  }
};

export default About;