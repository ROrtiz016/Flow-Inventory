import React, {Component} from 'react';
import './Products.css';
import NavBar from '../NavBar/NavBar'
import SubNav from '../SubNav/SubNav'
import CreateP from './CreateP/CreateP'
import UpdateP from './UpdateP/UpdateP'
import DeleteP from './DeleteP/DeleteP'

class Products extends Component{
    constructor(props){
        super(props)
        this.state ={

        }
    }

    render(){
        return(
            <div>
                <NavBar/>
                <SubNav/>
                <div className='products-tab-container'>
                    <h1 className='sales-activity'>Products</h1>
                    <p>Add, Update or delete Products from inventory</p>
                    <div className='sub-tab-container'>
                        <CreateP/>
                        <UpdateP/>
                        <DeleteP/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Products