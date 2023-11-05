import React from 'react'
import './index.scss'

const App = () => {

    const handleClick = () => {
       fetch('http://localhost:5000/images').then(res => {
            console.log(res)
       })
    }

    return <>
    
        <button onClick={handleClick}>Upload</button>
    </>
}

export default App 