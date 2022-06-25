import React from "react";
import { Link } from "react-router-dom"

function MissonUs(){
    return(
        <>
        <div className="missionUs">
            <div className="container">
                <div className="missionUs__btnBox">
                    <div className="missionUs__btns">
                        <div className="missionUs__left">
                           <Link to = "/production">
                                <i className='bx bxs-left-arrow-alt'></i>
                           </Link>
                        </div>
                        <div className="missionUs__volume">
                            <i className='bx bx-search'></i>
                            <i className='bx bx-volume-full'></i>
                        </div>
                    </div>
                </div>
                <h2 className="mission__title  animate__animated animate__bounceInRight animate__delay-2s">our company mission</h2>
                <p className="mission__text  animate__animated animate__bounceInLeft animate__delay-2s">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum!</p>
                <div className="missionUs__btnCont">
                    <button className="mission__btn animate__animated animate__tada animate__delay-2s animate__repeat-2">Contact</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default MissonUs