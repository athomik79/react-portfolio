import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main";
import { Link } from 'react-router-dom';

class App extends Component  {
  render () {
    return (
      <div style={{height: '300px', position: 'relative'}}>
      <Layout fixedHeader>
          <Header title={<span><span style={{ color: '#ddd' }}></span><strong>Portfolio Page</strong></span>}>
              <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
      </Layout>
  </div>
    );
  }
}
  

export default App;
