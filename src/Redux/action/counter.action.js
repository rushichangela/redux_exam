import { DNCREMENT_COUNTER, INCREMENT_COUNTER } from "../Action.Type"

export const increment = () =>(dispatch)=>{
    dispatch({type:INCREMENT_COUNTER})
}
export const dncrement = () =>(dispatch)=>{
    dispatch({type:DNCREMENT_COUNTER})
}