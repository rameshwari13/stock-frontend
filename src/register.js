import Axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import Navbar from "./navbar";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uname: "",
      mobile: "",
      email: "",
      password: "",
      formErrors: { uname:"", mobile:"", email: "", password: "" },
      unameValid: false,
      mobileValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let unameValid = this.state.unameValid;
    let mobileValid = this.state.mobileValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {

      case "uname":
        unameValid = (value.match(/^\S*$/i), value.length >= 8);
        fieldValidationErrors.uname = unameValid ? "" : "user name is invalid";
        break;
      case "mobile":
          mobileValid = (value.match(/^[0-9\b]+$/i), value.length === 10);
          fieldValidationErrors.mobile = mobileValid ? "" : "mobile Number is invalid";
          break;  
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : "email is invalid";
        break;
      case "password":
        passwordValid = value.length >= 5;
        fieldValidationErrors.password = passwordValid ? ""
          : "password should contain min 5 characters";
        break;
        
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        unameValid: unameValid,
        mobileValid: mobileValid,
        emailValid: emailValid,
        passwordValid: passwordValid,
        
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.unameValid && this.state.mobileValid && this.state.emailValid && this.state.passwordValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  onSubmit = (e) =>{
    e.preventDefault()

    const registerObject = {
        email: this.state.email,
        password: this.state.password,
        uname: this.state.uname,
        mobile: this.state.mobile
    };

    console.log("Hello", registerObject);

  Axios.post('http://localhost:8080/users/register', registerObject)
            .then((res) => {
                console.log(res.data);
                alert(res.data.message);
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ email: '', password:'', uname:'',mobile:'' })
    }



  render() {
    return (
      <div>
        <Navbar/>
      <div>
        <nav>
          <Link to="#">
          </Link>
         
        </nav>
        
        
        <form onSubmit={this.onSubmit}>
               <div className="form-group text-left">
                <input
                type="uname"
                required
                className="form-control"
                name="uname"
                placeholder="User Name"
                value={this.state.uname}
                onChange={this.handleUserInput}
              />
              {this.state.formErrors.uname.length>0 && 
              <span className="errorMessage">{this.state.formErrors.uname}</span>}
                </div>

                <div className="form-group text-left">
                <input
                type="mobile"
                required
                className="form-control"
                name="mobile"
                placeholder="Mobile Number"
                value={this.state.mobile}
                onChange={this.handleUserInput}
              />
              {this.state.formErrors.mobile.length>0 && 
              <span className="errorMessage">{this.state.formErrors.mobile}</span>}
                </div>

                <div className="form-group text-left">
                <input
                type="email"
                required
                className="form-control"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleUserInput}
              />
              {this.state.formErrors.email.length>0 && 
              <span className="errorMessage">{this.state.formErrors.email}</span>}
                </div>
                <div className="form-group text-left">
                    
                    <input
                    type="password"
                    name="password"
                   required
                   className="form-control"
                   placeholder="Password"
                   value={this.state.password}
                  onChange={this.handleUserInput}
              />
              {this.state.formErrors.password.length>0 && 
              <span className="errorMessage">{this.state.formErrors.password}</span>}
                </div>
                
            <button
              type="submit"
              id="btn1"
              class="btn btn-info"
            >
              SingUp
            </button>
          <br/>
            </form>
          
      </div>
      </div>
    );
  }
}

export default Register;








