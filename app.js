import React from 'react'
import ReactDOM from 'react-dom'

const parent = document.getElementById('parent')
const root = ReactDOM.createRoot(parent);

const Msg = ()=>{
    return (
        <>
        <h1>Hello from React by Dhanesh</h1>
        <p>This is simple react app with out CRA/VITE</p>
        </>
    )
}
root.render(<Msg/>)