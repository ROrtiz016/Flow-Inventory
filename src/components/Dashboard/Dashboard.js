import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";
import SubNav from "../SubNav/SubNav";
import "./Dashboard.css";
// import axios from 'axios'

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: ''
    };
  }
  

  render() {
    return (
      <div>
        <NavBar />
        <SubNav />

        <div className="dashboard-container">
          <h4 className="sales-activity">Sales Activity</h4>
          <div className="sales-tabs">
            <div className="sale-info-tab">
              <h2>200</h2>
              <p>Qty</p>
              <h5>to be packed</h5>
            </div>

            <div className="sale-info-tab">
              <h2>6</h2>
              <p>Orders</p>
              <h5>to be shipped</h5>
            </div>

            <div className="sale-info-tab">
              <h2>10</h2>
              <p>Orders</p>
              <h5>to be delivered</h5>
            </div>

            <div className="sale-info-tab">
              <h2>300</h2>
              <p>Orders</p>
              <h5>to be invoiced</h5>
            </div>

            <div className='Inv-summary-container'>
              <h4>Inventory Summary</h4>
                <div>
                  <p>Quantity at hand: </p>
                  <p>Quantity to be received: </p>
                </div>
            </div>
            
          </div>

          <div>
            <h4 className="sales-activity">Product Details</h4>
              <div className='prod-details-container'>
               <div className='items-det-cont'>
                  <p>Low Stock Items: </p>
                  <p>All Item Group: </p>
                  <p>All Items: </p>
                </div>

                <div>
                  <h5>Chart Active Items</h5>
                </div>

              </div>

            <h4>Top Selling Items</h4>
          </div>

        </div>
      </div>
    );
  }
}

export default Dashboard;
