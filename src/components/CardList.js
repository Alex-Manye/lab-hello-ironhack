import React from 'react'
import './components.css'

export default function CardList() {
    return (
        <div style={cardListStyle}>
            <div card1>
            <img src="./images/icon1.png" alt=""/>
            <h1>Declarative</h1>
            <p>React makes it <br></br>painless to create<br></br> interactive UIs</p>
            </div>
            <div card2>
            <img src="./images/icon2.png" alt=""/>
            <h1>Components</h1>
            <p>Build encapsulated <br></br>components that<br></br> manage their state</p>
            </div>
            <div card3>
            <img src="./images/icon3.png" alt=""/>
            <h1>Single-Way</h1>
            <p>A set of inmutable<br></br> values are passed to<br></br> the component's</p>
            </div>
            <div card4>
            <img src="./images/icon4.png" alt=""/>
            <h1>JSX</h1>
            <p>Statically-typed,<br></br> designed to run on<br></br> modern browsers</p>
            </div>
        </div>
    )
}

const cardListStyle = {
    display: 'flex',
    justifyContent: 'space-between',

}