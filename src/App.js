import React from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Home from './components/Home/Home'
import Dashboard from './components/Dashboard/Dashboard'
import Items from './components/Items/Items'
import Orders from './components/Orders/Orders'
import Products from './components/Products/Products'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register}/>
        <Route path='/home' component={Home}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/items' component={Items}/>
        <Route path='/orders' component={Orders}/>
        <Route path='/products' component={Products}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
