import React, { useEffect, useRef, useState } from "react";
import BtnNavigation from "./BtnNavigation";
import Mission from "./Mission";
import Footer from '../Footer/Footer'
import Category from "./Category";
import CategoryBtn from "./CategoryBtn";
import { useLocation } from "react-router-dom";


function Production({ 
    isPlaying, 
    setIsPlaying, 
    currentSong, 
    categoriesArr,
    productsArr
}){

    let location  = useLocation();

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

    const [filteredArr, setFilteredArr] = useState([])
    
    useEffect(() => {
        setFilteredArr( productsArr )
    }, [])

    return(
        <>
        <div className="langpage__volume" onClick={playSongHandler}>
            <i className={isPlaying ? 'bx bx-volume-mute' : 'bx bx-volume-full'}></i>
        </div>
        {categoriesArr.map((item, i) => {
            if(item.id === +location.pathname.split('/').at(-1)) {
                return (
                    <div key={i} className="production">
                        <div className="production__infos">
                            <h2 className="production__title">our production {item.name_en}</h2>
                            <p className="production__text">{item.description_en}</p>
                        </div>
                        <div className="production__btnBox">
                            <CategoryBtn 
                                setFilteredArr = {setFilteredArr}
                                productsArr = {productsArr}
                            />
                        </div>
                        <Category filteredArr = {filteredArr}/>
                        <Mission />
                        <Footer />
                        <BtnNavigation />
                        <audio ref={audioRef} src={currentSong.audio}></audio>
                    </div>
                )
            }
        })}
        </>
    )
}

export default Production