import Axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Buy extends Component {

    constructor(props) {
        super(props)

        this.onChangeSaleName = this.onChangeSaleName.bind(this);
        this.onChangeSalePrice = this.onChangeSalePrice.bind(this);
        this.onChangeSaleQuantity = this.onChangeSaleQuantity.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            bname: '',
            bprice:'',
            bquantity:''
        }
    }

    onChangeSaleName(e) {
        this.setState({ bname: e.target.value })
    }
    onChangeSalePrice(e) {
        this.setState({ bprice: e.target.value })
    }
    onChangeSaleQuantity(e) {
        this.setState({ bquantity: e.target.value })
    }


    onSubmit(e) {
        e.preventDefault()

        const saleObject = {
            bname: this.state.bname,
            bprice: this.state.bprice,
            bquantity: this.state.bquantity
        };

        Axios.post('http://localhost:8080/sale', saleObject)
            .then((res) => {
                console.log(res.data)
                alert("Added Sale Successfully!")
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ bname: '', bprice:'', bquantity:''  })
    }


    render() {
    return (
        <div>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <Link className="navbar-brand" to="#"><b>Stocks</b></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/addsale"> Add Buy</Link>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item7 active">
        <Link className="nav-link" to="/user">Back</Link>
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
                            <input type="text" className="form-control"  name="bname" value={this.state.bname} onChange={this.onChangeSaleName} placeholder=" Name"/>
                            <br></br></div>
                            <div className="col">
                            <input type="text" className="form-control" name="bprice" value={this.state.bprice} onChange={this.onChangeSalePrice} placeholder="Price"/>
                            <br></br></div>
                             <div class="col">
                            <input type="text" className="form-control" name="bquantity" value={this.state.bquantity} onChange={this.onChangeSaleQuantity} placeholder="Quantity"/>
                            <br></br></div> 
                        </div> 
                        <button className= "btn btn-info" type="submit">submit</button>
                        </form>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    )
}
}