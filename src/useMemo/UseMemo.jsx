import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [count, setCount] = useState(0)

    //expensive
    const doubleMyNumber = (num) => {
        for (let i = 0; i <= 1000000000; i++) { }
        console.log('running');
        return num * 2
    }

    useMemo(() => doubleMyNumber(count), [count])
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>click me</button>
            <h3>{doubleMyNumber(count)}</h3>
        </div>
    )
}

export default UseMemo