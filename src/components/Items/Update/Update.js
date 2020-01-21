import React,{Component} from 'react'
import axios from 'axios'

class Update extends Component{
    constructor(props){
        super(props)
        this.state ={
            id: 0,
            name: "",
            serial: 0,
            specs: "",
            quantity: 0,
            price: 0,
            provider: "",
        }

        this.handleUpdateName = this.handleUpdateName.bind(this);
        this.handleUpdateSerial = this.handleUpdateSerial.bind(this);
        this.handleUpdateSpecs = this.handleUpdateSpecs.bind(this);
        this.handleUpdateQuantity = this.handleUpdateQuantity.bind(this);
        this.handleUpdatePrice = this.handleUpdatePrice.bind(this);
        this.handleUpdateProvider = this.handleUpdateProvider.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.handleId = this.handleId.bind(this);

    }

    handleId(e){
        const id = e.target.value * 1;
        this.setState({
            id: id
        })
    }

    updateItem() {
        const item = {
          name: this.state.name,
          serial: this.state.serial,
          specs: this.state.specs,
          quantity: this.state.quantity,
          price: this.state.price,
          provider: this.state.price
        };
    
        axios.put(`/api/updateItem/${this.state.id}`, item).then(response => {
         alert('item updated')
        });
      }
    
      handleUpdateName(e) {
        this.setState({
          name: e.target.value
        });
      }
    
      handleUpdateSerial(e) {
        this.setState({
          serial: e.target.value
        });
      }
    
      handleUpdateSpecs(e) {
        this.setState({
          specs: e.target.value
        });
      }
    
      handleUpdateQuantity(e) {
        this.setState({
          quantity: e.target.value
        });
      }
    
      handleUpdatePrice(e) {
        this.setState({
          price: e.target.value
        });
      }
    
      handleUpdateProvider(e) {
        this.setState({
          provider: e.target.value
        });
      }

    render(){
        return(
            <div>
              <h4 className="subtab">Update Item</h4>
              <form className="input-form-container">
                <p>
                    Id:{" "}
                    <input 
                    type='text'
                    required
                    onChange={this.handleId}
                    />
                </p>
                <p>Item name:{" "}
                  <input
                    type="text"
                    required
                    onChange={this.handleUpdateName}/>
                </p>

                <p>
                  Serial number:{" "}
                  <input
                    type="text"
                    required
                    onChange={this.handleUpdateSerial}
                  />
                </p>
                <p>
                  Specs: <input type="text" onChange={this.handleUpdateSpecs} />
                </p>
                <p>
                  Quantity:{" "}
                  <input type="number" onChange={this.handleUpdateQuantity} />
                </p>
                <p>
                  Price per unit:{" "}
                  <input type="number" onChange={this.handleUpdatePrice} />
                </p>
                <p>
                  Provider: <input type="text" onChange={this.handleUpdateProvider} />
                </p>
                <button onClick={this.updateItem}>Submit</button>
              </form>
            </div>
        )
    }
}

export default Update;