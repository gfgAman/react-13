import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const[myName, setMyName] = useState('Aman')
    return (

        <div>
            <h1>{myName}</h1>
            <Child setMyName = {setMyName}/></div>
    )
}

export default Parent