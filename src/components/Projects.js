import React, { Component } from 'react';
import projectOne from '../components/img/project-1.jpg';
import projectTwo from '../components/img/project-2.jpg';
import projectThree from '../components/img/project-3.jpg';
import projectFour from '../components/img/project-4.jpg';

class Projects extends Component {
  render() {
    return (
      <div>
        <section id='projects' className="projects-section p-3 p-lg-5">
          <div className="container py-3">
            <h2 id="title-2" className="section-title mb-5">Featured Projects</h2>
            <div className="row">
              <div className="col-md-3 mb-5">
                <div className="card project-card">
                  <div className="row no-gutters">
                    <div className="col-lg-4 card-img-holder">
                      <img src={projectOne} className="card-img" alt="project" />
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body">
                        <h5 className="card-title"><a href="https://github.com/athomik79" className="theme-link">Project Heading</a></h5>
                        <p className="card-text">Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <p className="card-text"><small className="text-muted">Client: Google</small></p>
                      </div>
                    </div>
                  </div>
                </div>{/*//card*/}
              </div>{/*//col*/}
              <div className="col-md-3 mb-5">	
                <div className="card project-card">
                  <div className="row no-gutters">
                    <div className="col-lg-4 card-img-holder">
                      <img src={projectTwo} className="card-img" alt="project" />
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body">
                        <h5 className="card-title"><a href="https://github.com/athomik79" className="theme-link">Project Heading</a></h5>
                        <p className="card-text">Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                        <p className="card-text"><small className="text-muted">Client: Dropbox</small></p>
                      </div>
                    </div>
                  </div>
                </div>{/*//card*/}
              </div>{/*//col*/}
              <div className="col-md-3 mb-5">
                <div className="card project-card">
                  <div className="row no-gutters">
                    <div className="col-lg-4 card-img-holder">
                      <img src={projectThree} className="card-img" alt="project" />
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body">
                        <h5 className="card-title"><a href="https://github.com/athomik79" className="theme-link">Project Heading</a></h5>
                        <p className="card-text">Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <p className="card-text"><small className="text-muted">Client: Google</small></p>
                      </div>
                    </div>
                  </div>
                </div>{/*//card*/}
              </div>{/*//col*/}
              <div className="col-md-3 mb-5">
                <div className="card project-card">
                  <div className="row no-gutters">
                    <div className="col-lg-4 card-img-holder">
                      <img src={projectFour} className="card-img" alt="project" />
                    </div>
                    <div className="col-lg-8">
                      <div className="card-body">
                        <h5 className="card-title"><a href="https://github.com/athomik79" className="theme-link">Project Heading</a></h5>
                        <p className="card-text">Project intro lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        <p className="card-text"><small className="text-muted">Client: Uber</small></p>
                      </div>
                    </div>
                  </div>
                </div>{/*//card*/}
              </div>{/*//col*/}
            </div>{/*//row*/}
            {/* <div className="text-center py-3"><a href="portfolio.html" className="btn btn-primary"><i className="fas fa-arrow-alt-circle-right mr-2" />View Portfolio</a></div>	 */}
          </div>{/*//container*/}
        </section>{/*//featured-section*/}
      </div>
    );
  }
};

export default Projects;