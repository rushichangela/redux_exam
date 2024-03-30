import { DNCREMENT_COUNTER, INCREMENT_COUNTER } from "../Action.Type";

const inistilige={
    isLoding:false,
    counter:0,
    error:null,
}

export const counterReducer =(state=inistilige,action)=>{

    console.log(action);

    switch (action.type) {
        case INCREMENT_COUNTER:
            
        return{
            counter:state.counter+1,
        }
        case DNCREMENT_COUNTER:
            
        return{
            counter:state.counter-1,
        }
    
        default:
           return state;
    }
}