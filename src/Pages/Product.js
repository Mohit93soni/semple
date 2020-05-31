import React, { Component } from 'react'
import {connect} from 'react-redux'
import Card from "../components/Card";
class Product extends Component {
    
    render(){
    return (
        <div>
            <Card/>
        </div>
    )
}
}
const mapStateToProps=state=>{
    return{
        pd: state.product
    }

}
export default connect(mapStateToProps)(Product)
