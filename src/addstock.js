import Axios from 'axios';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class AddStock extends Component {

    constructor(props) {
        super(props)

       

        this.onChangeStockName = this.onChangeStockName.bind(this);
        this.onChangeStockPrice = this.onChangeStockPrice.bind(this);
        this.onChangeStockQuantity = this.onChangeStockQuantity.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            sname: '',
            sprice:'',
            quantity:''
        }
    }

    onChangeStockName(e) {
        this.setState({ sname: e.target.value })
    }
    onChangeStockPrice(e) {
        this.setState({ sprice: e.target.value })
    }
    onChangeStockQuantity(e) {
        this.setState({ quantity: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()

        const stockObject = {
            sname: this.state.sname,
            sprice: this.state.sprice,
            quantity: this.state.quantity
        };

        Axios.post('http://localhost:8080/stock', stockObject)
            .then((res) => {
                console.log(res.data)
                alert("Added Stock Successfully!")
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ sname: '', sprice:'', quantity:''  })
    }


    render() {
    return (
        <div>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <Link className="navbar-brand" to="#"><b>Stock Management</b></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/addstock">Add Stock</Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item7 active">
        <Link className="nav-link" to="/manager">Back</Link>
      </li>
      </ul>
      
  </div>
</nav>  
                
                    <div>
                   
                    <div>
                        <div>
                        <form onSubmit={this.onSubmit}>
                            
                        <div className="form-row">
                            <div className="col">
                            <input type="text" className="form-control"  name="sname" value={this.state.sname} onChange={this.onChangeStockName} placeholder="Stock Name"/>
                            <br></br></div>
                            <div className="col">
                            <input type="text" className="form-control" name="sprice" value={this.state.sprice} onChange={this.onChangeStockPrice} placeholder="Stock Price"/>
                            <br></br></div>
                             <div class="col">
                            <input type="text" class="form-control" name="quantity" value={this.state.quantity} onChange={this.onChangeStockQuantity} placeholder="Stock Quantity"/>
                            <br></br></div> 
                        </div> 
                        <button className="btn btn-info" type="submit">submit</button>
                        </form>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    )
}
}