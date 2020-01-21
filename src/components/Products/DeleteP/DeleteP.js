import React,{Component} from 'react';
import axios from 'axios';

class DeleteP extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: 0,
            name: ''
        }

        this.itemIdhandler = this.itemIdhandler.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleDeleteName = this.handleDeleteName.bind(this)
    }

    itemIdhandler(e){
        this.setState({
            id: e.target.value
        })
    }

    handleDeleteName(e){
        this.setState({
            name: e.target.value
        })
    }

    handleDelete(){
        const{
            id,
            name
        } = this.state
    axios.delete(`/api/deleteProduct/${id}/${name}`).then(
        alert("product deleted from Inventory")
    )
    }

    render(){
        return(
            <div>
            <h4 className="subtab">Delete Product</h4>
            <form className="input-form-container">
              <p>
                  Id:{" "}
                  <input
                    type="text"
                    required
                    onChange={this.itemIdhandler}
                  />
              </p>
              <p>
                Product name:{" "}
                <input
                  type="text"
                  required
                  onChange={this.handleDeleteName}
                />
              </p>

              <button onClick={this.handleDelete}>Delete</button>
            </form>
          </div>
        )
    }
}

export default DeleteP;