import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import ProjectsContainer from './components/ProjectsContainer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <Main />
        <About />
        <ProjectsContainer />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
