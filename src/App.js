import React from 'react';
//import logo from './logo.svg';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import './App.css';
import Orders from './Pages/Orders'
import { Route, Switch, Link} from 'react-router-dom'
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
    <NavBar/>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about/' component={About}/>
        <Route exact path='/contact/' component={Contact}/>
        <Route exact path='/product/' component={Product}/>
        <Route exact path='/orders/' component={Orders}/>
        <Route component={Error}/>
      </Switch>
      <div className='or'>
        <Link to='/orders/'> Order Now</Link>
      </div>
      </div>
  );
}

export default App;
