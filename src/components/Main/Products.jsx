import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer'
import BtnNavigation from "./BtnNavigation";

function Products({ 
    isPlaying, 
    setIsPlaying, 
    currentSong,
    categoriesArr, 
    english,
    russian, 
    uzbek,

    // !!!!!!!!!!!!!!!!!!!!!!

    doorObj
}){

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
            <div className="products">
                <div className="langpage__volume" onClick={playSongHandler}>
                    <i className={isPlaying ? 'bx bx-volume-mute' : 'bx bx-volume-full'}></i>
                </div>
                <div className="products__nameBox">
                    <h2 className="products__name animate__animated animate__bounceInDown animate__delay-2s">{t(3)}</h2>
                </div>
                <ul className="products__list row">
                    {doorObj.map((item, i) => {
                        return (
                            <li key={i} className="products__item col-6">
                                <img className="products__imgBox" src={item.image} alt="door" />
                                <div className="products__infoBox">
                                    <span className="products__span animate__animated animate__bounceInLeft animate__delay-2s">{t(19)}</span>
                                    {english &&
                                        <h3 className="products__title animate__animated animate__bounceInRight animate__delay-2s">{item.name_en}</h3>
                                    }
                                    {russian &&
                                        <h3 className="products__title animate__animated animate__bounceInRight animate__delay-2s">{item.name_ru}</h3>
                                    }
                                    {uzbek &&
                                        <h3 className="products__title animate__animated animate__bounceInRight animate__delay-2s">{item.name_uz}</h3>
                                    }
                                    <p className="products__text animate__animated animate__bounceInLeft animate__delay-2s">{item.description_en}</p>
                                    <Link to= {`/production/${item.id}`}>
                                        <button className="products__button anim-btn">
                                            <p>{t(1)}</p>
                                            <i className='bx bx-chevrons-right'></i>
                                        </button>
                                    </Link>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <BtnNavigation />
            </div>
            <Footer 
                english={english}  
                uzbek = {uzbek} 
                russian = {russian} 
            />
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </>
    )
}

export default Products