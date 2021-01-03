import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AddInvestor extends Component {

    constructor(props) {
        super(props)

        this.onChangeInvestorName = this.onChangeInvestorName.bind(this);
        
        
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            iname: ''  
        }
    }

    onChangeInvestorName(e) {
        this.setState({ iname: e.target.value })
    }
    

    onSubmit(e) {
        e.preventDefault()

        const investorObject = {
            iname: this.state.iname
        };

        Axios.post('http://localhost:8080/investor', investorObject)
            .then((res) => {
                console.log(res.data)
                alert("Added Successfully!")
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ iname: '' })
    }


    render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <Link className="navbar-brand" to="#"><b>Investor</b></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    
    <ul className="navbar-nav ml-auto">
      <li className="nav-item7 active">
        <Link className="nav-link" to="/investor">Back</Link>
      </li>
      </ul>
      
  </div>
</nav>  
                        <div>
                        <form onSubmit={this.onSubmit}>
                            
                        <div className="form-row">
                            <div className="col">
                            <input type="text" className="form-control"  name="iname" value={this.state.iname} onChange={this.onChangeInvestorName} placeholder="Investor Name"/>
                            </div>
                            
                        </div> 
                        <button className="btn btn-info" type="submit">Add</button>
                        </form>
                        </div>
                        </div>
        
    )
}
}