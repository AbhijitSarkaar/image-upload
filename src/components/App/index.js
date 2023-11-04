import React from 'react'
import './index.scss'

const App = () => {


    const handleClick = () => {
        console.log('click')
    }

    return <>
    
        <button onClick={handleClick}>Upload</button>
    </>
}

export default App 