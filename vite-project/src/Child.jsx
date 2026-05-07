import React, { memo } from 'react'

const Child = () => {
    function test(){
        console.log("first")
    }
  return (
    <div>Child</div>
  )
}

export default memo(Child)