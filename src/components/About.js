import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import{ faDatabase } from '@fortawesome/free-solid-svg-icons'
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";


class About extends Component {
  render() {
    return (

      <section className="about-section p-3 p-lg-5" id="about">
        <div className="container py-3">
          <h2 className="section-title mb-3">Experience</h2>
          <div className="section-intro mb-5">Sustainable banh mi street art semiotics health goth vice. Af deep v gluten-free neutra, etsy vice pabst subway tile prism meh hot chicken unicorn kogi austin <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">online resume</a> and <a href="https://github.com/athomik79" rel="noopener noreferrer" target="_blank">project portfolio</a>.</div>
          <div className="row">
            <div className="item col-6 col-lg-4">
              <div className="item-inner">
                <div className="item-icon"><i id="js"/> <FaReact/> </div>
                <h3 className="item-title">React</h3>
                <div className="item-desc">Mumblecore umami trust fund, butcher fashion axe banjo normcore freegan fam keytar disrupt. Taiyaki echo park chartreuse PBR&amp;B vice freegan leggings raclette yuccie..</div>
              </div>{/*//item-inner*/}
            </div>{/*//item*/}
            <div className="item col-6 col-lg-4">
              <div className="item-inner">
                <div className="item-icon"><i id="node"/> <FaNodeJs/> </div>
                <h3 className="item-title">Node.js</h3>
                <div className="item-desc">Wolf vice dreamcatcher vinyl salvia pickled helvetica slow-carb small batch. Hammock brunch everyday carry mumblecore, fingerstache pitchfork photo booth.</div>
              </div>{/*//item-inner*/}
            </div>{/*//item*/}
            <div className="item col-6 col-lg-4">
              <div className="item-inner">
                <div className="item-icon"><i id="database"/> <FontAwesomeIcon icon={faDatabase}/> </div>
                <h3 className="item-title">Database</h3>
                <div className="item-desc">Mixtape bicycle rights la croix art party fam etsy portland chartreuse af venmo stumptown church-key. Cliche etsy crucifix portland coloring book.</div>
              </div>{/*//item-inner*/}
            </div>{/*//item*/}
            <div className="item col-6 col-lg-4">
              <div className="item-inner">
                <div className="item-icon"><i id="html"/> <FaHtml5/> <i id="css"/> <FaCss3Alt/> </div>
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