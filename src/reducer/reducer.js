import angle from '../images/angle.jpg'
import chnal2 from '../images/chnal2.jpg'
import flate from '../images/flate.jpg'
import sqpipe from '../images/sqpipe.jpg'
import Rpipe from '../images/Rpipe.jpg'
const initialState={
    product:[
        {
            icon: angle,
            title: 'Ms Angle',
            info: ' hey EveryOne..'

        },
        {
            icon: chnal2,
            title: 'Ms Angle',
            info: ' hey EveryOne..'

        },
        {
            icon: flate,
            title: 'Ms Flate',
            info: ' hey EveryOne..'

        },
        {
            icon: sqpipe,
            title: 'Ms Square pipe',
            info: ' hey EveryOne..'

        },
        {
            icon: Rpipe,
            title: 'Ms Round pipe',
            info: ' hey EveryOne..'

        }
    ]
}

const reducer=(state=initialState,action)=>{
    return state;
} 
export default reducer;