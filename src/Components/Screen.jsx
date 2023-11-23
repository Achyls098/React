import React from 'react'
import '../Styles/Screen.css';

import Asset from '../Photo/Search.png';

function Screen() {
  return (
    <div className= "container">
        <div className= "header">
            <div className="text">Komyuter</div>
            <div className="underline"></div>
        </div> 
            <div className="inputs">
                <div className="input">
                    <img src ={Asset} alt ="Location"  />
                    <input type="text"  placeholder="Search"/>
                </div>
                <div className="input">
                    <img src = {Asset} alt ="Search" />
                    <input type="text" placeholder="Point Location"/>
                </div>
                <button className="custom-button">Tara!</button>
            </div>
    </div>
  )
}

export default Screen
