import Axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class User extends Component{

  constructor(){
    super()

    this.state={sale:[]}
    this.deleteBuy= this.deleteBuy.bind(this);
  }

  componentDidMount(){
    Axios.get("http://localhost:8080/sale").then(res =>{console.log(res.data)
  this.setState({sale:res.data.sale})
  })
  }




  deleteBuy = (bid) => {
    Axios.delete('http://localhost:8080/sale/'+ bid)
    .then((res) => {
        console.log('stock successfully deleted!')
        alert('Do You Want Delete Purchase?')
        this.setState({
          sale: this.state.sale.filter(user => user.bid !== bid)
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
                <Link className="navbar-brand" to="#"><b>User</b></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
               </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                 <ul className="navbar-nav">
                <li className="nav-item active">
                <Link className="nav-link" to="#">Stock list</Link>
               </li>
      {/* <li class="nav-item active">
        <Link class="nav-link" to="/">Back</Link>
      </li> */}
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item7 active">
        {/* <Link className="nav-link" to="/">Back</Link> */}
        <button className="btn btn-warning" onClick={this.logout}>Sign out</button>

      </li>
      </ul>
      
  </div>
</nav>  
<div className="container mt-5">

<td><Link to="/buy"><button type="button" className="btn btn-success">Buy</button></Link></td>

<table class="table table-dark table-hover text-center bordered">
              <thead class="thead-inverse">
                <tr>
                  {/* <th>StockId</th> */}
                  <th>Stock Name</th>
                  <th>Stock price</th>
                  <th>Stock quantity</th>
                  <th>Buy</th>
                </tr>
                </thead>
                <tbody>
                  {this.state.sale.map(sale =>{
                    return(

                      <tr>
                    
                    <td scope="row">{sale.bname}</td>
                    <td scope="row">{sale.bprice}</td>
                    <td scope="row">{sale.bquantity}</td>
                  
                    
                     <td>  
                    <button onClick={() => this.deleteBuy(sale.bid)} className="btn btn-info">Sale</button>
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

