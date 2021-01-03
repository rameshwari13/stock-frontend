import Axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Manager extends Component{

  constructor(props){
    super(props)

    this.state={stock:[]}
    this.deleteStock= this.deleteStock.bind(this);
  }

  componentDidMount(){
    Axios.get("http://localhost:8080/stock").then(res =>{console.log(res.data)
  this.setState({stock:res.data.stockadd})
  })

  }


  deleteStock = (sid) => {
    Axios.delete('http://localhost:8080/stock/'+ sid)
    .then((res) => {
        console.log('stock successfully deleted!')
        alert('Do You Want Delete Stock?')
        this.setState({
          stock: this.state.stock.filter(user => user.sid !== sid)
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
  <Link className="navbar-brand" to="#"><b>Stock Management</b></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="#">Stock list</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/addstock">Add Stock</Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item7 active">
      <button className="btn btn-warning" onClick={this.logout}>Sign out</button> </li>
      </ul>
      
      
  </div>
</nav>  
<div className="container mt-5">

<table className="table table-dark table-hover text-center bordered">
              <thead className="thead-inverse ">
                <tr>
                  {/* <th>StockId</th> */}
                  <th>Stock Name</th>
                  <th>price</th>
                  <th>Quantity</th>

                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.stock.map(stock =>{
                    return(

                      <tr>
                    
                    <td scope="row">{stock.sname}</td>
                    <td scope="row">{stock.sprice}</td>
                    <td scope="row">{stock.quantity}</td>
                  
                    <td><Link to={"/updatestock/"+stock.sid}><button type="button" className="btn btn-warning">Edit</button></Link></td>
                    <td><button onClick={() => this.deleteStock(stock.sid)} className="btn btn-danger">Delete</button></td>
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

