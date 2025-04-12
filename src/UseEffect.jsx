import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    // const [count, setCount] = useState(0)
    // const [number, setNumber] = useState(50)

    const [arr, setArr] = useState([])

    console.log(arr, 'anfvenjivjijei');
    const fetchData = async () => {
        const data = await axios.get('https://jsonplaceholder.typicode.com/users')
        // console.log(data?.data)
        setArr(data?.data)
    }
    console.log(arr, 'fetched daataaa');

    // useEffect(() => console.log('rendering'),[number])

    useEffect(() => { fetchData() }, [])
    return (
        <div>
            {/* <h1>count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>count</button>
            <h1>number: {number}</h1>
            <button onClick={() => setNumber(number - 1)}>number</button> */}

            {/* data-rendering on screeenn */}
            {
                arr?.map(({username,name,email}) => (
                    <div style={{border:'1px solid', padding:'3px'}}>
                    <p>{username}</p>
                    <p>{name}</p>
                    <p>email</p>
                    </div>
                ))
            }
        </div>
    )
}

export default UseEffect