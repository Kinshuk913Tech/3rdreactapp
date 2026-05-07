import React from 'react'
let initialstate=(0) 
export const Counter = () => {
    let [state , dispatch] = React.useReducer((state , action)=>{
        switch(action.type){
            case "increment":
                return state + 1
            case "decrement":
                return state - 1
            default:
                return state
        }
    }, 0)


  return (
    <div>Counter
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <span>{state}</span>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  )
}
