import React,{Component} from 'react'
import axios from 'axios'

class UpdateP extends Component{
    constructor(props) {
        super(props);
        this.state = {
          id: '',
          name: "",
          serial: 0,
          category: "Jurasic Park",
          description: "",
          quantity: 0,
          price: 0,
          provider: "",
        };
    
        this.handleName = this.handleName.bind(this);
        this.handleSerial = this.handleSerial.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleProvider = this.handleProvider.bind(this);
        this.handleCategory = this.handleCategory.bind(this);
        this.createItem = this.createItem.bind(this);
        this.handleId = this.handleId.bind(this)
      }
      
      createItem() {
        const product = {
          name: this.state.name,
          serial: this.state.serial,
          category: this.state.category,
          description: this.state.description,
          quantity: this.state.quantity,
          price: this.state.price,
          provider: this.state.provider
        };
    
        axios.put(`/api/updateProduct/${this.state.id}`, product).then(response => {
         alert('Product Updated')
        });
      }
    
      handleId(e){
        this.setState({
          id: e.target.value
        })
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
    
      handleDescription(e) {
        this.setState({
          description: e.target.value
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
    
      handleCategory(e) {
        this.setState({
          category: e.target.value
        });
      }

    render(){
        return(
            <div>
                  <h4 className="subtab">Update Product</h4>
                  <form className="input-form-container">
                    <p>
                      Id: {' '}
                      <input
                      type='text'
                      id= "id"
                      onChange={this.handleId}
                      />
                    </p>
                    <p>
                      Product name:{" "}
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
                      Category:{" "}
                      <select id="category" onChange={this.handleCategory}>
                        <option value="Jurasic Park">Jurasic Park</option>
                        <option value="Star Wars">Star Wars</option>
                        <option value="Ninjago">Ninjago</option>
                      </select>
                    </p>
                    <p>
                      Description:{" "}
                      <input
                        type="text"
                        id="description"
                        onChange={this.handleDescription}
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
        )
    }
}

export default UpdateP