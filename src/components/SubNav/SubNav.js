import React, { Component } from "react";
import "./SubNav.css";
import Settings from '../../Pictures/settings.png'
import User from '../../Pictures/user.png'

class SubNav extends Component {
  render() {
    return (
      <div className="subnav-container">
        <div>
          <p className="search-bar">
            Search <input type="text" className="input-bar" />
          </p>
        </div>

        <div className='user-info'>
          <h4>username</h4>
          <img src={Settings} alt="settings" className='settings-icon'/>
          <img src={User} alt="user" className='user-icon'/>
        </div>

      </div>
    );
  }
}

export default SubNav;
