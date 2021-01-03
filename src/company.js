import React from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';


export default class Company extends React.Component{

  constructor(){
    super()

    this.state={company:[]}
    this.deleteStock= this.deleteStock.bind(this);
  }

  componentDidMount(){
    Axios.get("http://localhost:8080/company").then(res =>{console.log(res.data)
  this.setState({company:res.data.company})
  })
  }



  deleteStock = (cid) => {
    Axios.delete('http://localhost:8080/company/'+ cid)
    .then((res) => {
        console.log('company successfully deleted!')
        // alert('Deleted succesfully')
        this.setState({
          company: this.state.company.filter(user => user.cid !== cid)
        })
    }).catch((error) => {
        console.log(error)
    })
}

logout=(e)=>{

  e.preventDefault();

  localStorage.removeItem('token');
  localStorage.removeItem('role');
  this.props.history.push('/')
  
}


    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <Link className="navbar-brand" to="#"><b>Company Management</b></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="#">List</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/addcompany">Add Company</Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item7 active">
      <button className="btn btn-warning" onClick={this.logout}>Sign out</button>
      </li>
      </ul>
  </div>
</nav>  <div className="container mt-5">
{/* <h1><td><Link to="/addcompany"><button type="button" class="btn btn-success">Add</button></Link></td></h1> */}

<table class="table table-dark table-hover text-center bordered">
              <thead class="thead-inverse">
                <tr>
                  {/* <th>StockId</th> */}
                  <th>Company Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.company.map(company =>{
                    return(

                      <tr>
                    {/* <td scope="row">{stock.sid}</td> */}
                    <td scope="row">{company.cname}</td>


                    <td><Link to={"/updatecompany/"+company.cid}><button type="button" class="btn btn-warning">Edit</button></Link></td>


                    <td>
                    <button onClick={() => this.deleteStock(company.cid)} className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                    )
                  })}
                </tbody>

            </table>
</div>

            </div>
        )
    }

}
