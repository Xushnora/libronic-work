
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom"

function MissonUs({ isPlaying, setIsPlaying, currentSong }){

    const audioRef = useRef(null)

    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying)
    }

    return(
        <>
        <div className="missionUs">
            <div className="container">
                <div className="missionUs__btnBox">
                    <div className="missionUs__btns">
                        <div className="missionUs__left leftBtn">
                           <Link to = "/products">
                                <i className='bx bxs-left-arrow-alt'></i>
                           </Link>
                        </div>
                        <div className="missionUs__volume">
                            <div className="missionUs__searchBtn">
                                <i className='bx bx-search'></i>
                            </div>
                            <div className="missionUs__volumeBtn" onClick={playSongHandler}>
                                <i className={isPlaying ? 'bx bx-volume-mute' : 'bx bx-volume-full'}></i>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="mission__title  animate__animated animate__bounceInRight animate__delay-2s">our company mission</h2>
                <p className="mission__text  animate__animated animate__bounceInLeft animate__delay-2s">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum!</p>
                <div className="missionUs__btnCont">
                    <button className="mission__btn button animate__animated animate__tada animate__delay-2s animate__repeat-2">Contact</button>
                </div>
                <audio ref={audioRef} src={currentSong.audio}></audio>
            </div>
        </div>
        </>
    )
}

export default MissonUs