import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Courgette&display=swap"
          rel="stylesheet"
        />

        <div className="Login-container">
          <h1 className="App-name">Flow</h1>

          <div className="user-inputs">
            <h3 className="user-input">
              Username: <input type="text" />
            </h3>
            <h3 className="user-input">
              Password: <input type="password" />
            </h3>
          </div>

          <div>
            <button>
              <Link to="/register" className="path-register">
                Register
              </Link>
            </button>
            <button>
              <Link to='/Home' className='path-login'>Login</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
