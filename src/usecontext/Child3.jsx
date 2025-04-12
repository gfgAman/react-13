import React, { useContext } from 'react'
import { userContext } from './Parent'

const Child3 = () => {
    const myName = useContext(userContext)


  return (
    <div>Hello, {myName}</div>
  )
}

export default Child3