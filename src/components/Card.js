import React, { Component } from 'react'
import './Card.css'
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'
class Card extends Component {
    render(){
    return (
        <div className='carde'>
        <div className='container'>
        {this.props.pd.map((prdct,index)=>{
            return(
        <div className='card' key={index}>
        <div className='imgBx'>
            <img src={prdct.icon} alt='pic' style={{width:'230px'}}/>
        </div>
        <div className='content'>
            <h2>{prdct.title}</h2>
            <p>{prdct.info}</p>
            <Button variant="contained" color='Primary'>More Detail</Button>    
        </div>
        </div>

        )
        })}   
        </div>
        </div>
    )}
}
const mapStateToProps=state=>{
    return{
        pd: state.res.product
    }

}
export default connect(mapStateToProps)(Card)
