import React, { Component } from "react";
import "./Items.css";
import NavBar from "../NavBar/NavBar";
import SubNav from "../SubNav/SubNav";
import Create from './Create/Create';
import Update from './Update/Update';
import DeleteItem from './Delete/Delete'

class Items extends Component {
  
  render() {
    
    return (
      <div>
        <NavBar />
        <SubNav />
        <div className="items-tab-container">
          <h1 className="sales-activity">Items</h1>
            <p>Create, update or delete item from inventory</p>
          <div className="subtab-container">
            <Create/>
            <Update/>
            <DeleteItem/>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
