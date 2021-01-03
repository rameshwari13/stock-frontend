import Axios from 'axios';
import React, { Component } from 'react'

export default class UpdateStock extends Component {

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

    componentDidMount(){
        Axios.get("http://localhost:8080/stock/" + this.props.match.params.sid)
        .then(res => {
            this.setState({
                sname: res.data.stock[0].sname,
                sprice: res.data.stock[0].sprice,
                quantity: res.data.stock[0].quantity
            });
        })
        .catch((error) =>{
            console.log(error);
        })
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

        Axios.put('http://localhost:8080/stock/' +this.props.match.params.sid, stockObject)
            .then((res) => {
                console.log(res.data.stock)
                alert("Updated Successfully!")
            }).catch((error) => {
                console.log(error)
            });

        this.setState({  sname: '', sprice:'', quantity:'' })
        this.props.history.push('/stock')
    }
    

    render() {
    return (
        <div>
            <div>
                    
                    <div>
                   
                    <div>
                        <div>
                        <form onSubmit={this.onSubmit} >
                            
                        <div className="form-row">
                            <div className="col">
                            <input type="text" className="form-control"  name="sname" value={this.state.sname} onChange={this.onChangeStockName} placeholder="Stock Name"/>
                            </div><br></br>
                            <div className="col">
                            <input type="text" className="form-control" name="sprice" value={this.state.sprice} onChange={this.onChangeStockPrice} placeholder="Stock Price"/>
                            </div>
                            <div className="col">
                            <input type="text" className="form-control" name="quantity" value={this.state.quantity} onChange={this.onChangeStockQuantity} placeholder="Stock Quantity"/>
                            </div>
                        </div><br></br>
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