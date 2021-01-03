import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
//  import "./componants/Login/login.css";
// import Navbar from "./navbar";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
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
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : "email is invalid";
        break;
      case "password":
        passwordValid = value.length >= 5;
        fieldValidationErrors.password = passwordValid
          ? ""
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

  render() {
    return (
      <div>
        <Navbar/>
      <div>
        <nav>
          <Link to="#">
          </Link>
         
        </nav>

        <form>
          <h1>Log In</h1>

          <div>
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.email
              )}`}
            >
              <label for="inputEmail" class="sr-only">
                Enter Email 
              </label>
              <input
                type="email"
                required
                
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleUserInput}
              />
             
            </div>
          </div>

          <div>
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.password
              )}`}
            >
              <label for="inputPassword">
              </label>
              <input
                type="password"
              
                name="password"
                required
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleUserInput}
              />
             
            </div>
          </div>

          <Link className="link" to="/products">
            <button
              type="submit"
              id="btn1"
           
              disabled={!this.state.formValid}
            >
              Log In
            </button>
          </Link>
          <Link to="/register">
            Register
          </Link>
        </form>
      </div>
      </div>
    );
  }
}

export default Login;



// import React,{Component} from 'react';
// import Navbar from './navbar';
// import {Link, Redirect} from 'react-router-dom'
// import "./login.css";




// class Login extends Component {
//   constructor(props) {
//   super(props);
//   this.state = {
//     show: true,
//     input: {},
//     errors: {}
//   };
   
//   this.handleClick = this.handleClick.bind(this);
//   this.handleChange = this.handleChange.bind(this);
//   this.handleSubmit = this.handleSubmit.bind(this);
// }
// handleClick=(e)=>{
//   e.preventDefault();
//   this.setState({show:false});
// }

// handleChange=(event)=> {
//   event.preventDefault();
//    let input = this.state.input;
   

//   this.setState({
//     input
//   });
// }

 
   
// handleSubmit=(e) => {
//   e.preventDefault();

//   if(this.validate()){
//       console.log(this.state);

//       let input = {};
      
//       input["email"] = "";
//       input["password"] = "";
      
//       this.setState({input});

//       //document.body.style.backgroundImage = "url('./image/PO05Sellingstocks.jpg')";


//       //alert('Logged in successfully!');
      
//       //if(window.confirm('You Are Logged In!!!'))
//    //{
//    //window.open('/products');
//    //};
   
//   }
// }

// validate(){
//     let input = this.state.input;
//      let errors = {};
//      let isValid = true;

//     // this.setState({
//     //   input:this.state.email && this.state.password,
//     // });
 

//     if (!input["email"]) {
//       isValid = false;
//       errors["email"] = "Please enter your email Address.";
//     }

//     if (typeof input["email"] !== "undefined") {
        
//       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//       if (!pattern.test(input["email"])) {
//         isValid = false;
//         errors["email"] = "Please enter valid email address.";
//       }
//     }

//     if (!input["password"]) {
//       isValid = false;
//       errors["password"] = "Please enter your password.";
//     }

//     this.setState({
//       errors: errors
//     });

//     return isValid;
// }
   
// render() {
    
//   return (
    
//     <div>
//       <Navbar/>
//     <div className="card col-md-3 offset-md-4">
//       <form onSubmit={this.handleSubmit} onSubmit={this.handleClick} >

//         <div class="form-group">
//           <input 
//             type="text" 
//             name="email" 
//             value={this.state.input.email}
//             onChange={this.handleChange}
//             class="form-control" 
//             placeholder="Enter email" 
//             id="email"/>

//             <div className="text-danger">{this.state.errors.email}</div>
//         </div>

//         <div class="form-group">
        
//           <input 
//             type="password" 
//             name="password" 
//             value={this.state.input.password}
//             onChange={this.handleChange}
//             class="form-control" 
//             placeholder="Enter password" 
//             id="password"/>

//             <div className="text-danger">{this.state.errors.password}</div>
//         </div>
           
      
//           <Link to="/products"><button type="submit">submit</button></Link>
//         <Link to="/register">Sign Up</Link>
        
//       </form>
//     </div>
//     </div>
//   );
//   }
//   // else {
//   //   return <Redirect to="/products"/>
//   //  }
// }

// export default Login;



