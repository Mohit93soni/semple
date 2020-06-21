import React,{Component} from 'react'
import {InputAdornment, Select, MenuItem, Input, FormHelperText,Button, FormControl } from '@material-ui/core'
import './Order.css'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import * as actionCreators from '../action'
class Order extends Component {
  state={
      item:'',
      value:'',
      weight:'',
      rate:'',
      total:'',
      totalPrice:''
  }


   handleChange = (event) => {
    this.setState({item:event.target.value});
    console.log('value',event)
  };
    render(){
  


    const weightHandler=event=>{
        this.setState({weight:event.target.value})
        console.log(event.target.value)
    };

    const getRateHandler=(price)=>{
        console.log('price',price);
        
   
        //this.props.onPassRate(price)
    }
    console.log('rate',this.state.rate);
    return (
        <div >
        <Select value={this.state.item}
          onChange={(event)=>console.log('ev',event)}
          displayEmpty style={{marginRight:10}}>
            <MenuItem value=''><em>Select Item</em></MenuItem>
            {this.props.stock.map(stk=>{
        
          console.log('stk',stk);
          return(
            <MenuItem value={stk} key={stk.id} >{stk.item}</MenuItem>
          
        )})}
        </Select>
        
        <FormControl >
        
        <Input
            id="standard-adornment-weight"
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            value={this.state.weight}
            type='number'
            onChange={weightHandler}
          />
          <FormHelperText id="standard-weight-helper-text">weight</FormHelperText>
        </FormControl>
        <label className='rate'>{this.state.rate} /kg</label>
        <label className='rate'>{this.state.weight*this.state.rate}$</label>
        
        <div>
        
        <label className='total' >total{this.state.total}</label>
        </div>
        <Button className='addButton'>click</Button>
        <div className='buttonContainer'>
        <Link to='/'>
        <Button variant="contained" color="secondary"> 
            Cancle
        </Button>
        </Link>
        <Button variant="contained" color="primary" className='button1'>
            Order Now
        </Button>
        </div>
        
        </div>
    )}
}
const mapStateToProps=state=>{
  return{
    stock:state.odrRes.stock,
    rate:state.odrRes.rate
  }
};
const mapDispatchToProps=dispatch=>{
  return{
    onPassRate:(rate)=>dispatch(actionCreators.passRate(rate))
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(Order)
