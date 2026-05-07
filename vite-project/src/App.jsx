import React, { useState , useCallback } from 'react'


const App = () => {
  const [ count , setcount] = useState(0)
  function addvalue(){
    setcount(count+1)
  }
  function subvalue (){
    setcount(count-1)
  }
  function test(){
    console.log("printed function of test")
  }

  let handledata= useCallback(()=>{
    console.log("function call")
  })

  
  return (
    <div>App
     <h1> {count}</h1>
     {/* <button  onClick={addvalue}>add1</button> */}
     {/* <button onClick={subvalue}>sub1</button> */}
    


    </div>
  )
}

export default App