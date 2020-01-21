import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../Pictures/flow-logo.png";

class NavBar extends Component {
  render() {
    return (
      <div className="Navbar-container">
        <link
          href="https://fonts.googleapis.com/css?family=Courgette&display=swap"
          rel="stylesheet"
        />

        <h1 className="App-name" id="app-name">
          Flow
          <img src={Logo} alt="Logo" className="Logo" />
        </h1>

        <div className="tab-container">
          <h3 className="tab-name">
            <Link to="/dashboard" className="tab-link">
              DashBoard
            </Link>
          </h3>
          <h3 className="tab-name"><Link to='/orders' className='tab-link'>Create Order</Link></h3>
          <h3 className="tab-name">
            <Link to="/items" className="tab-link">
              Items
            </Link>
          </h3>
          <h3 className="tab-name"><Link to='/products' className="tab-link">Products</Link></h3>
          <h3 className="tab-name">Sales Order</h3>
          <h3 className="tab-name">Purchase Orders</h3>
          <h3 className="tab-name">Reports</h3>
        </div>
      </div>
    );
  }
}

export default NavBar;
