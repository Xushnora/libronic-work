import React from "react";
import { Link } from 'react-router-dom'

function Mission(){
    return(
        <div className="mission">
            <div className="container">
                <h2 className="mission__title animate__animated animate__bounceInRight animate__delay-2s">our company mission</h2>
                <p className="mission__text animate__animated animate__bounceInLeft animate__delay-2s">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum!</p>
                <div className="mission__btnGroup">
                    <Link to = '/about'>
                        <button className="mission__btn animate__animated animate__tada animate__delay-2s">Contact</button>
                    </Link>
                    <Link to = '/about'>
                        <button className="mission__btn animate__animated animate__tada animate__delay-2s">Explore more</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Mission