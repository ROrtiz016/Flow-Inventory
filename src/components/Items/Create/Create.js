import React,{Component} from 'react';
import axios from 'axios'

class Create extends Component{
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          serial: 0,
          specs: "",
          quantity: 0,
          price: 0,
          provider: "",
        };
    
        this.handleName = this.handleName.bind(this);
        this.handleSerial = this.handleSerial.bind(this);
        this.handleSpecs = this.handleSpecs.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleProvider = this.handleProvider.bind(this);
        this.createItem = this.createItem.bind(this);
      }
      
      createItem() {
        const item = {
          name: this.state.name,
          serial: this.state.serial,
          specs: this.state.specs,
          quantity: this.state.quantity,
          price: this.state.price,
          provider: this.state.price
        };
    
        axios.post("/api/postItem", item).then(response => {
         alert('item added to inventory')
        });
      }
    
      handleName(e) {
        this.setState({
          name: e.target.value
        });
      }
    
      handleSerial(e) {
        this.setState({
          serial: e.target.value
        });
      }
    
      handleSpecs(e) {
        this.setState({
          specs: e.target.value
        });
      }
    
      handleQuantity(e) {
        this.setState({
          quantity: e.target.value
        });
      }
    
      handlePrice(e) {
        this.setState({
          price: e.target.value
        });
      }
    
      handleProvider(e) {
        this.setState({
          provider: e.target.value
        });
      }
    
      render() {
        
        return (
          <div>
                  <h4 className="subtab">Add Item</h4>
                  <form className="input-form-container">
                    <p>
                      Item name:{" "}
                      <input
                        type="text"
                        required
                        id="name"
                        onChange={this.handleName}
                      />
                    </p>
                    <p>
                      Serial number:{" "}
                      <input
                        type="text"
                        required
                        id="serial"
                        onChange={this.handleSerial}
                      />
                    </p>
                    <p>
                      Specs:{" "}
                      <input
                        type="text"
                        required
                        id="specs"
                        onChange={this.handleSpecs}
                      />
                    </p>
                    <p>
                      Quantity:{" "}
                      <input
                        type="number"
                        required
                        id="quantity"
                        onChange={this.handleQuantity}
                      />
                    </p>
                    <p>
                      Price per unit:{" "}
                      <input
                        type="number"
                        required
                        id="price"
                        onChange={this.handlePrice}
                      />
                    </p>
                    <p>
                      Provider:{" "}
                      <input
                        type="text"
                        required
                        id="provider"
                        onChange={this.handleProvider}
                      />
                    </p>
                    <p>
                      Image:{" "}
                      <input
                        type='file'
                        name='myImage'
                      />
                    </p>
                    <button onClick={this.createItem}>Submit</button>
                  </form>
    
              </div>
        );
      }
}

export default Create