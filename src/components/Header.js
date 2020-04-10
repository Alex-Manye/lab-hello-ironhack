import React from 'react'
import './components.css'

export default function Header() {
    return (
        <div style={headerStyle}>
        <img src="./images/logo192.png" alt=""/>
        <h1 className="heading">Say hello to <br></br>ReactJs</h1>
        <p>You will learn a Frontend framework from scratch to become a Ninja developer</p>
        <button className="button">Awesome!</button>

        </div>
    )
}

/*Note for myself -> className when the style is in a css file,  
style={} when teh style is an object in the js*/

const headerStyle = {
    backgroundColor : '#1E2433',
    color : 'white'

}

