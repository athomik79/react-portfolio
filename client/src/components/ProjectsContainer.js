import React, { Component } from 'react';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import { Container, Row, Col } from 'react-bootstrap';

// import expressNote from '../components/img/express-notetaker-600.png';
// import burgerApp from '../components/img/burger-app-600.png';
// import fitnessTracker from '../components/img/fitness-tracker-600.png';
// import reactReading from '../components/img/react-reading-list-600.png';

class ProjectsContainer extends Component {
  render() {
    return (
      <div id='projects' className='content p-3 p-lg-5 py-5'>
        <h1 className='heading text-light'>Projects</h1>
        <p className='description'>
          Hover over cards, or click on mobile for more info.
        </p>
        <a className='card' href='#!'>
          <div
            className='front'
            style={{ backgroundImage: 'url(//source.unsplash.com/300x401)' }}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
          </div>
          <div className='back'>
            <div>
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>
                Provident consectetur natus voluptatem quis tenetur sed beatae
                eius sint.
              </p>
              <button className='button'>Click Here</button>
            </div>
          </div>
        </a>
        <a className='card' href='#!'>
          <div
            className='front'
            style={{ backgroundImage: 'url(//source.unsplash.com/300x402)' }}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
          </div>
          <div className='back'>
            <div>
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>
                Provident consectetur natus voluptatem quis tenetur sed beatae
                eius sint.
              </p>
              <button className='button'>Click Here</button>
            </div>
          </div>
        </a>
        <a className='card' href='#!'>
          <div
            className='front'
            style={{ backgroundImage: 'url(//source.unsplash.com/300x403)' }}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
          </div>
          <div className='back'>
            <div>
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>
                Provident consectetur natus voluptatem quis tenetur sed beatae
                eius sint.
              </p>
              <button className='button'>Click Here</button>
            </div>
          </div>
        </a>
        <a className='card' href='#!'>
          <div
            className='front'
            style={{ backgroundImage: 'url(//source.unsplash.com/300x404)' }}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
          </div>
          <div className='back'>
            <div>
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>
                Provident consectetur natus voluptatem quis tenetur sed beatae
                eius sint.
              </p>
              <button className='button'>Click Here</button>
            </div>
          </div>
        </a>
        <a className='card' href='#!'>
          <div
            className='front'
            style={{ backgroundImage: 'url(//source.unsplash.com/300x405)' }}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
          </div>
          <div className='back'>
            <div>
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>
                Provident consectetur natus voluptatem quis tenetur sed beatae
                eius sint.
              </p>
              <button className='button'>Click Here</button>
            </div>
          </div>
        </a>
        <a className='card' href='#!'>
          <div
            className='front'
            style={{ backgroundImage: 'url(//source.unsplash.com/300x406)' }}
          >
            <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
          </div>
          <div className='back'>
            <div>
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>
                Provident consectetur natus voluptatem quis tenetur sed beatae
                eius sint.
              </p>
              <button className='button'>Click Here</button>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default ProjectsContainer;
