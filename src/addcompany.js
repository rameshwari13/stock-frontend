import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AddCompany extends Component {

    constructor(props) {
        super(props)

        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        
        
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            cname: ''  
        }
    }

    onChangeCompanyName(e) {
        this.setState({ cname: e.target.value })
    }
    

    onSubmit(e) {
        e.preventDefault()

        const companyObject = {
            cname: this.state.cname
        };

        Axios.post('http://localhost:8080/company', companyObject)
            .then((res) => {
                console.log(res.data)
                alert("Added company Successfully!")
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ sname: '' })
    }


    render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <Link className="navbar-brand" to="#"><b>Company</b></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    
    <ul className="navbar-nav ml-auto">
      <li className="nav-item7 active">
        <Link className="nav-link" to="/company">Back</Link>
      </li>
      </ul>
      
  </div>
</nav>  
                        <div>
                        <form onSubmit={this.onSubmit}>
                            
                        <div className="form-row">
                            <div className="col">
                            <input type="text" className="form-control"  name="cname" value={this.state.cname} onChange={this.onChangeCompanyName} placeholder="Company Name"/>
                            </div><br></br>
                            
                        </div> 
                        <button className="btn btn-info" type="submit">Add</button>
                        </form>
                        </div>
        </div>
    )
}
}