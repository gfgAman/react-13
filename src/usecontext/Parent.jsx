import React from 'react'
import Child1 from './Child1'
import { createContext } from 'react'

//createContext

export const userContext = createContext()
const Parent = () => {
    const myName = 'Saurabh'
  return (
    <div>
        <userContext.Provider value={myName}>

        <Child1/>
        </userContext.Provider>
        </div>
  )
}

export default Parent