import React,{useState} from 'react'
import {InputAdornment, Select, MenuItem, Input, FormHelperText,Button, FormControl } from '@material-ui/core'
import './Order.css'
import { Link } from 'react-router-dom';
const Order = () => {
    const [item, setItem] =useState('');
    const [weight,setWeight]= useState();
    const [rate,setRate] =useState();
    const handleChange = (event) => {
      setItem(event.target.value);
      console.log(event.target.value)
      if(event.target.value==='MsAngle'){
        setRate(45)
      }
      if(event.target.value==='MsChannel'){
        setRate(46)
      }
      if(event.target.value==='MsSqPipe'){
        setRate(49)
      }
      if(event.target.value==='MsRoPipe'){
        setRate(51)
      }
      if(event.target.value==='MsFlate'){
        setRate(40)
      }
    };

    const weightHandler=event=>{
        setWeight(event.target.value)
        console.log(event.target.value)
    };

    return (
        <div >
        <Select value={item}
          onChange={handleChange}
          displayEmpty style={{marginRight:10}}>
            <MenuItem value=''><em>Select Item</em></MenuItem>
            <MenuItem value='MsAngle'>Angle</MenuItem>
          <MenuItem value='MsChannel'>Channel</MenuItem>
          <MenuItem value='MsSqPipe'>Square Pipe</MenuItem>
          <MenuItem value='MsRoPipe'>Round Pipe</MenuItem>
          <MenuItem value='MsFlate'>Flate</MenuItem>
        </Select>
        
        <FormControl >
        
        <Input
            id="standard-adornment-weight"
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            value={weight}
            type='number'
            onChange={weightHandler}
          />
          <FormHelperText id="standard-weight-helper-text">weight</FormHelperText>
        </FormControl>
        <label className='rate'>{rate} /kg</label>
        <label className='rate'>{weight*rate}</label>
        <div>
        <label className='total'>total</label>
        </div>
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
    )
}

export default Order
