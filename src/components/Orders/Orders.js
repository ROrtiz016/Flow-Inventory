import React, { Component } from "react";
import "./Orders.css";
import NavBar from "../NavBar/NavBar";
import SubNav from "../SubNav/SubNav";

class Orders extends Component {
  constructor(props){
    super(props)
    this.state = {
      orderId: 0,
    }
  }

  componentDidMount(){
    const orderId = Math.floor((Math.random() * 10000) + 1)
    console.log(orderId)
    this.setState({
      orderId: orderId,
      addProduct: false
    })
  }

  addProductHandler(){
    this.setState({
      addProduct: !this.state.addProduct
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <SubNav />

        <div className='orders-tab-container'>
          <h1 className='sales-activity'>Create Work Order</h1>
          <form> 
            <div className='order-input-container'>
             <p>Order Number: {this.state.orderId}</p>
             <p>Receiver: <input type="text" required/></p>
             <p>Shipping Address: <input type="text" required/></p> 
             <p>Billing Address: <input type="text" required/></p>
             <p>Shipping Method: <input type="text" required/></p>
             <p>Sales person: <input type="text" required/></p>
             <p>Order Date: <input type="date" required/></p>
            </div>

           <h6 className='add-product' onClick={() => this.addProductHandler()}>add product</h6>
           <div className={this.state.addProduct ? 'input-product' : 'input-product-none'}>
             <p>Product</p>
             <select>
               <option></option>
             </select>
           </div>
            
            <div className='order-info-grid'>
              <div className='grid-header'> 
                <p>Product & Description</p>
                <p>Ordered</p>
                <p>Status</p>
                <p>Price per unit</p>
                <p>Amount</p>
              </div>
            </div>

          </form>

        </div>

      </div>
    );
  }
}

export default Orders;
