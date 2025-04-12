import React, { useState } from 'react'
import Button from './Button'
import './reactStyling.css'

const App = () => {
  const [toggle, setToggle] = useState(false)
  const btns = [
    {
      title: 'Login',
      bgColor: 'red'
    },
    {
      title: 'Logout',
      bgColor: 'green'
    },
    {
      title: 'Subscribe',
      bgColor: 'yellow'
    },
    {
      title: 'Add to Cart',
      bgColor: 'pink'
    },
    {
      title: 'Kuch bhi',
      bgColor: 'blue'
    },

  ]
  const styleObj = {
    backgroundColor: 'pink',
    color: 'blue'
  }
  return (
    <div>
      {/* <Button title = 'Login'/>
      <Button title = 'Logout'/>
      <Button title = 'Subscribe'/>
      <Button title = 'Add to Cart'/>
      <Button title = 'Kuch bhi'/> */}
      {
        btns.map(({ title, bgColor }) => (
          <Button title={title} bgColor={bgColor} />
        ))
      }
      {/* <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>Hello world</h1>
      <h1 style={styleObj}>This is internal styling</h1>
      <h1 id='third'>This is external styling</h1>
      <h1 style={{ backgroundColor: toggle ? 'white' : 'black', color: toggle ? 'black' : 'white' }}>this is toggle button</h1>
      <button onClick={() => setToggle(!toggle)}>Switch</button> */}
    </div>
  )
}

export default App