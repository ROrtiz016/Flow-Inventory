import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
import "./Home.css";
import NavBar from '../NavBar/NavBar'
import SubNav from '../SubNav/SubNav'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  

  render() {
    return (
      <div className='Home-container'>
        <NavBar/>
        <SubNav/>
        <div className='home-div'>
          <h1>Welcome to Flow</h1>
        </div>
      </div>
    );
  }
}

export default Home;
