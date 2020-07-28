import React, { Component } from 'react';
import expressNote from '../components/img/express-notetaker-600.png';
import burgerApp from '../components/img/burger-app-600.png';
import fitnessTracker from '../components/img/fitness-tracker-600.png';
import reactReading from '../components/img/react-reading-list-600.png';

class Projects extends Component {
  render() {
    return (
      <div>
        <section id='projects' className='projects-section p-3 p-lg-5'>
          <div className='container py-3'>
            <h2 id='title-2' className='section-title mb-5'>
              Featured Projects
            </h2>
            <div className='row'>
              <div className='item col-6 col-lg-4'>
                <div className='card project-card'>
                  <div className='row no-gutters'>
                    <div className='col-lg-4 card-img-holder'>
                      <img
                        src={expressNote}
                        className='card-img'
                        alt='project'
                      />
                    </div>
                    <div className='col-lg-8'>
                      <div className='card-body'>
                        <h5 className='card-title'>
                          <a
                            href='https://cryptic-reef-35449.herokuapp.com/'
                            className='theme-link'
                          >
                            Express Note Taker
                          </a>
                        </h5>
                        <p className='card-text'>
                          An application built with node.js and express that can
                          be used to write, save, and delete notes.
                        </p>
                        <p className='card-text'>
                          <small className='text-muted'>GWU Bootcamp</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*//card*/}
              </div>
              {/*//col*/}
              <div className='item col-6 col-lg-4 col-md-3 mb-5'>
                <div className='card project-card'>
                  <div className='row no-gutters'>
                    <div className='col-lg-4 card-img-holder'>
                      <img src={burgerApp} className='card-img' alt='project' />
                    </div>
                    <div className='col-lg-8'>
                      <div className='card-body'>
                        <h5 className='card-title'>
                          <a
                            href='https://hidden-spire-81956.herokuapp.com/'
                            className='theme-link'
                          >
                            Eat Da Burger
                          </a>
                        </h5>
                        <p className='card-text'>
                          Eat Da Burger is a CRUD app that lets users create,
                          read, update and delete the names of burgers.{' '}
                        </p>
                        <p className='card-text'>
                          <small className='text-muted'>GWU Bootcamp</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*//card*/}
              </div>
              {/*//col*/}
              <div className='item col-6 col-lg-4 col-md-3 mb-5'>
                <div className='card project-card'>
                  <div className='row no-gutters'>
                    <div className='col-lg-4 card-img-holder'>
                      <img
                        src={fitnessTracker}
                        className='card-img'
                        alt='project'
                      />
                    </div>
                    <div className='col-lg-8'>
                      <div className='card-body'>
                        <h5 className='card-title'>
                          <a href='https://intense-shore-21076.herokuapp.com/?id=5f06617b3420b2001792a89a'>
                            Nosql Workout Tracker
                          </a>
                        </h5>
                        <p className='card-text'>
                          A workout tracker application built with Nodejs,
                          Express, and MongoDB.
                        </p>
                        <p className='card-text'>
                          <small className='text-muted'>GWU Bootcamp</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*//card*/}
              </div>
              {/*//col*/}
              <div className='item col-6 col-lg-4 col-md-3 mb-5'>
                <div className='card project-card'>
                  <div className='row no-gutters'>
                    <div className='col-lg-4 card-img-holder'>
                      <img
                        src={reactReading}
                        className='card-img'
                        alt='project'
                      />
                    </div>
                    <div className='col-lg-8'>
                      <div className='card-body'>
                        <h5 className='card-title'>
                          <a href='https://powerful-tundra-64148.herokuapp.com/'>
                            MERN Reading List APP
                          </a>
                        </h5>
                        <p className='card-text'>
                          A full stack reading list application, made with
                          MongoDB, Express, React and Nodejs.
                        </p>
                        <p className='card-text'>
                          <small className='text-muted'>GWU Bootcamp</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*//card*/}
              </div>
              {/*//col*/}
            </div>
            {/*//row*/}
            {/* <div className="text-center py-3"><a href="portfolio.html" className="btn btn-primary"><i className="fas fa-arrow-alt-circle-right mr-2" />View Portfolio</a></div>	 */}
          </div>
          {/*//container*/}
        </section>
        {/*//featured-section*/}
      </div>
    );
  }
}

export default Projects;
