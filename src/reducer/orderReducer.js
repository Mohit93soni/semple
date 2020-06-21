import * as actionType from '../action'
const initialState={
    stock:[
        {
                id:1,
                item:'Angle',
                value:'MsAngle',
                price:44
            
        },
        {
            
                id:2,
                item:'Channel',
                value:'MsChannel',
                price:45
            
        },
        {
            
                id:3,
                item:'Square Pipe',
                value:'MsSqPipe',
                price:47
            
        },
        {
            
                id:4,
                item:'Round Pipe',
                value:'MsRoPipe',
                price:49
            
        },
        {
            
                id:5,
                item:'Flate',
                value:'MsFlate',
                price:40
            
        },
        {
                id:6,
                item:'10Square',
                value:'MsSquare',
                price:44.5
            
        }
        
    ],
    rate:[]
}

const orderReducer=(state=initialState,action)=>{
    if(action.type===actionType.RATE){
        return{ 
            rate:action.ra
        }
    }
    return state;
}

export default orderReducer;