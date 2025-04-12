import React from 'react'

const Child = ({ setMyName }) => {
    return (
        <div>
            <button onClick={() => setMyName('xyz')}>click</button>
        </div>
    )
}

export default Child