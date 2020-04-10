import React from 'react'

export default function Navbar() {
    return (
        <div style={navStyle}>
            <img src="./images/ironhack-logo.svg" alt=""/>
            <img src="./images/menu-top.svg" alt=""/>
        </div>
    )
}

const navStyle = {
    backgroundColor: '#1E2433',
    display: 'flex',
    justifyContent: 'space-between',
    
}

