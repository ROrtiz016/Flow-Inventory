import React, { Component } from "react";
// import axios from "axios";
import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      employeeId: 0,
      username: '',
      password: '',
      confirmPassword: ''
    };

    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleEmployeeId = this.handleEmployeeId.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleConfPass = this.handleConfPass.bind(this)
  }

  handleFirstName(e){
    this.setState({
      firstName: e.target.value
    })
    console.log(this.state.firstName)
  }

  handleLastName(e){
    this.setState({
      lastName: e.target.value
    })
    console.log(this.lastName)
  }

  handleEmployeeId(e){
    this.setState({
      employeeId: e.target.value
    })
  }

  handleUsername(e){
    this.setState({
      username: e.target.value
    })
  }

  handlePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  handleConfPass(e){
    this.setState({
      confirmPassword: e.target.value
    })
  }


  render() {
    return (
      <div>
        <div className="register-cont">
          <h1>Register</h1>
          <form className='input-container'>
            <h3 className="user-info-input">
              First name: <input type="text" required className='input-case' onChange={this.handleFirstName}/>
            </h3>
            <h3 className="user-info-input">
              Last name: <input type="text" required className='input-case' onChange={this.handleLastName}/>
            </h3>
            <h3 className="user-info-input">
              Employee id: <input type="text" required className='input-case'/>
            </h3>
            <h3 className="user-info-input">
              Username: <input type="text" required className='input-case'/>
            </h3>
            <h3 className="user-info-input">
              Password: <input type="password" required className='input-case'/>
            </h3>
            <h3 className="user-info-input">
              Confirm password: <input type="password" required className='input-case'/>
            </h3>
          </form>
            <input type="submit" value="Submit" />
        </div>
      </div>
    );
  }
}

export default Register;
