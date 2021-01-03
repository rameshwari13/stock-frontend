import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';



export default class Adminstock extends Component{
  constructor(props){
    super(props)

    const token = localStorage.getItem('token')

    let loggedIn = true
    if (token == null) {
      loggedIn = false
      
    }

    this.state = {
      loggedIn
    }
  }

  logout=(e)=>{

    e.preventDefault();

    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.props.history.push('/')
    
  }

    render(){

      if (this.state.loggedIn === false) {
            return <Redirect to="/login"/>  
        }
      
        return(
            <div>
               <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <Link className="navbar-brand" to="#"><b>Manage</b></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="#"></Link>
        <div>
        </div>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="#"></Link>
      </li>
      
    </ul>
      <ul className="navbar-nav ml-auto">
      <li className="nav-item7 active">
        <button className="btn btn-warning" onClick={this.logout}>Sign out</button>
      </li>
      </ul>
  </div>
</nav>  

<div>
        
          <div className="container mt-4">
            <table className="table table-dark table-hover text-center bordered mt-5">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Link</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <th scope="row">1</th>
      <td>Companies</td>
      <td><Link to="/company">Companies</Link></td>
     
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Investors</td>
      <td><Link to="/investor">Investors</Link></td>
      <td></td>
    </tr>
  </tbody>
</table>
</div>
        </div>

            </div>
        )
    }

}
