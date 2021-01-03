import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./login.css";
import Navbar from "./navbar";
import Axios from 'axios';

class Login extends Component {  // render method, base class
  constructor(props) {
    super(props)

     const token = localStorage.getItem('token')  //for store

    let loggedIn = true
    if (token == null) {
      loggedIn = false
      
    }

  
    this.state = {
      email: "",     //for store
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
      loggedIn
    };
  }

  componentDidMount(){ // after render method component
  
    this.roleBaseRendering();

  }

  handleUserInput = (e) => {  
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
    this.setState({ [e.target.name]: e.target.value })
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
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
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  
    

  onSubmit = (e) =>{   // event 
    e.preventDefault()   // systhetic event to avoid refresh re-render

    const loginObject = {   // this is a object
        email: this.state.email,
        password: this.state.password
    };

    console.log("Hello", loginObject);

  Axios.post('http://localhost:8080/users/login', loginObject) // it will give url and object,Axio is a promise method
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('token',res.data.token)
                localStorage.setItem('role',res.data.role)
                this.roleBaseRendering();
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ email: '', password:'' })
    }

    roleBaseRendering=(e) =>{

     const token= localStorage.getItem('token')
     const role= localStorage.getItem('role')

      if(role==='admin'){
        this.props.history.push('/adminStock'); // browesr router will use history
        alert("Welcome Admin");
      }else if(role==='user'){
        this.props.history.push('/user');
        alert("Welcome User");
      }else if(role==='manager'){
        this.props.history.push('/manager');
        alert("Welcome Manager");
      }
    }

  render() {
    if ((this.state.loggedIn)) {
      return <Redirect to="/adminStock"/>  
    }
    return (    // what we want to show in broweser write it in return
      <div>  
        <Navbar/>
      <div>
        <nav>
          <Link to="#">
          </Link>
         
        </nav>
        
      
        <form className="info" onSubmit={this.onSubmit}> 
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
              class="btn btn-info">
              Login
            </button>
          <br/>
          <Link to="/register"> 
            New User?
          </Link>        
            </form>
          
      </div>
      </div>
    );
  }
}

export default Login;






