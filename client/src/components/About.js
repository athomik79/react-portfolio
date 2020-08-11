import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FaNodeJs } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';

class About extends Component {
  render() {
    return (
      <section className='about-section p-3 p-lg-5' id='about'>
        <div className='about-content py-5'>
          <h2 className='heading mb-3'>Experience</h2>
          <div className='section-intro mb-5'>
            I am a full stack web developer and with a visual arts background
            and a passion for bringing ideas to life through creative visual
            communication and strong technical skills.{' '}
            {/* <a
              href='https://www.linkedin.com/'
              rel='noopener noreferrer'
              target='_blank'
            >
              online resume
            </a>{' '}
            and{' '}
            <a
              href='https://github.com/athomik79'
              rel='noopener noreferrer'
              target='_blank'
            >
              project portfolio
            </a> */}
          </div>
          <div className='row'>
            <div className='item col-6 col-lg-4'>
              <div className='item-inner'>
                <div className='item-icon'>
                  <i id='react' /> <FaReact style={{ color: '#61dbfb' }} />{' '}
                </div>
                <h3 className='item-title'>React</h3>
                <div className='item-desc'>
                  React.js, a comprehensive JavaScript library for building user
                  interfaces, has changed the way we think about front-end
                  development.
                </div>
              </div>
              {/*//item-inner*/}
            </div>
            {/*//item*/}
            <div className='item col-6 col-lg-4'>
              <div className='item-inner'>
                <div className='item-icon'>
                  <i id='node' /> <FaNodeJs style={{ color: '#58b58a' }} />{' '}
                </div>
                <h3 className='item-title'>Node.js</h3>
                <div className='item-desc'>
                  Node.js and Express.js create a flexible application framework
                  that provides a robust set of features for web and mobile
                  applications.
                </div>
              </div>
              {/*//item-inner*/}
            </div>
            {/*//item*/}
            <div className='item col-6 col-lg-4'>
              <div className='item-inner'>
                <div className='item-icon'>
                  <i id='database' />{' '}
                  <FontAwesomeIcon
                    icon={faDatabase}
                    style={{ color: '#589636' }}
                  />{' '}
                </div>
                <h3 className='item-title'>Database</h3>
                <div className='item-desc'>
                  Experience with MongoDB NoSQL databases and MySQL databases.
                </div>
              </div>
              {/*//item-inner*/}
            </div>
            {/*//item*/}
            <div className='item col-6 col-lg-4'>
              <div className='item-inner'>
                <div className='item-icon'>
                  <i id='html' /> <FaHtml5 style={{ color: '#dc6e43' }} />{' '}
                  <i id='css' /> <FaCss3Alt style={{ color: '#57a8da' }} />{' '}
                  <i id='css' /> <FaBootstrap style={{ color: '#553C7B' }} />{' '}
                </div>
                <h3 className='item-title'>HTML &amp; CSS</h3>
                <div className='item-desc'>
                  Modern responsive design for web and mobile applications.
                </div>
              </div>
              {/*//item-inner*/}
            </div>
            {/*//item*/}
          </div>
          {/*//row*/}
        </div>
        {/*//container*/}
      </section>
    );
  }
}

export default About;
