import React from 'react'
import './contact.css'
//import {Parallax, Background} from 'react-parallax'
const Contact = () => {
    return (
        <div className='contact'>
        <div className='box'>
        <h2>Contact us</h2>
        <form>
            <div><input  required='' />
            <label>Name</label><br/></div>
            <div>
            <input type='text' required='' />
            <label>Email</label><br/>
            </div>
            <div>

            <textarea>  </textarea>
            <label>Address</label></div>
            <input type='submit' value='click me'/>
        </form>
        </div>
        </div>
    )
}

export default Contact
