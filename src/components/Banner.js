import React from 'react'
import logo from '../images/logo.PNG'
import { Link } from 'react-router-dom'
export default function Banner({children,title,subtitle}) {
    return (
        <div className='banner'>
            
            <Link to='/contact/'>
            <img src={logo} style={{height:'80%', width:'80%'}} />
            </Link>
            
            <h1>{title}</h1>
            <div/>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}
