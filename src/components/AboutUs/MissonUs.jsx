
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
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

    const {t} = useTranslation();

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
                <h2 className="mission__title  animate__animated animate__bounceInRight animate__delay-2s">{t(20)}</h2>
                <p className="mission__text  animate__animated animate__bounceInLeft animate__delay-2s">{t(14)}</p>
                <div className="missionUs__btnCont">
                    <button className="mission__btn button animate__animated animate__tada animate__delay-2s animate__repeat-2">{t(5)}</button>
                </div>
                <audio ref={audioRef} src={currentSong.audio}></audio>
            </div>
        </div>
        </>
    )
}

export default MissonUs