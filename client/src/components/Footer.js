import React, { Component } from 'react';
import { FaRegCopyright } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (

      <footer className="footer text-center py-4">
        <h5><FaRegCopyright/> Andrew Thomas 2020</h5>
      </footer>
    );
  }
};

export default Footer;