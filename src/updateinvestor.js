import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UpdateInvestor extends Component {

    constructor(props) {
        super(props)

        this.onChangeInvestorName = this.onChangeInvestorName.bind(this);
        
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            iname: ''  
        }
    }

    componentDidMount(){
        Axios.get("http://localhost:8080/investor/" + this.props.match.params.inid)
        .then(res => {
            this.setState({
                iname: res.data.investor[0].iname     
            });
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    onChangeInvestorName(e) {
        this.setState({ iname: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const investorObject = {
            iname: this.state.iname
            
        };

        Axios.put('http://localhost:8080/investor/' +this.props.match.params.inid, investorObject)
            .then((res) => {
                console.log(res.data.investor)
                alert("Updated successfully!")
            }).catch((error) => {
                console.log(error)
            });

        this.setState({  iname: ''})
        this.props.history.push('/investor')
    }
    

    render() {
    return (
        <div>
            <div>
                    
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
                        <div>
                        <form onSubmit={this.onSubmit}>
                            
                        <div className="form-row">
                            <div className="col">
                            <input type="text" className="form-control"  name="iname" value={this.state.iname} onChange={this.onChangeInvestorName} placeholder="Investor Name"/>
                            </div><br></br>
                        </div> 
                        <button className="btn btn-info" type="submit">Edit</button>
                        </form>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    )
}
}