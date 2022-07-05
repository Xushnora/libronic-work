import React, { useEffect, useRef } from "react";
import {Link} from 'react-router-dom'

function LangPage({ 
    currentSong,
    isPlaying, 
    setIsPlaying,
    changeRu,
    changeEng,
    changeUz
}){

    const audioRef = useRef(null)
    
    useEffect(() => {
        audioRef.current.play();
    }, [])


    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying)
    }

    return(
        <div className="langpage">
            <div className="langpage__volume" onClick={playSongHandler}>
                <i className={isPlaying ? 'bx bx-volume-mute' : 'bx bx-volume-full'}></i>
            </div>
            <div className="langpage__titleBox">
                <h2 className="langpage__title">choose language</h2>
            </div>
            <div className="langpage__btnsBox">
                <Link to= '/products'>
                    <button onClick={() => changeUz(true)} className="langpage__btn">uzbek</button>
                </Link>
                <Link to= '/products'>
                    <button onClick={() => changeEng(true)} className="langpage__btn">english</button>
                </Link>
                <Link to= '/products'>
                    <button onClick={() => changeRu(true)} className="langpage__btn">russian</button>
                </Link>
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default LangPage