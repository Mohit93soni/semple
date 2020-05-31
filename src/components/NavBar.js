import React, { Component } from 'react'
import logo from '../images/logo.PNG'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NavBar.css'
export default class NavBar extends Component {
    state={
        isOpen: false
    }
    handleToggle=()=>{
        this.setState({isOpen: !this.state.isOpen})
    }
    render() {
        return (
            <nav className='navbar'>
                <div className='nav-center'>
                  <div className='nav-header'>
                        <img src={logo} alt='logo' style={{height:'50px', width:'100px'}}/>
                        <button className='nav-btn' type='button' onClick={this.handleToggle}>
                        <FaAlignRight className=''/>
                        </button>
                  </div>
                    <ul className={this.state.isOpen?'nav-links show-nav':'nav-links'}>
                        <li><Link to='/'>Home</Link> </li>
                        <li><Link to='/about/'>About</Link> </li>
                        <li><Link to='/contact/'>Contact</Link> </li>
                        <li><Link to='/product/'>Our Product</Link> </li>
                        <li style={{float:'right'}}>GST No. 08ANASPL8016Z1Z</li>
                    </ul>
                </div>
            </nav>
        )
    }
}
