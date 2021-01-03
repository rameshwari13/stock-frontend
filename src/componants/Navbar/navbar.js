import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
     render(){

    return (
        <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info text-white">
    <Link className="navbar-brand" href="/">Stock Management System</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutus">About Us</Link>
        </li>
  
      </ul>

      <ul className="navbar-nav ml-auto">
        
        <li className="nav-item">
          <Link className="nav-link" to="/login">Sign In</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/register">Sign Up</Link>
        </li>
      </ul>
     
    </div>
  </nav>
  </div>

    )}}