import React, { useEffect, useState, Component } from "react";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import videoArr from '../../VideoObj'
import SwipVideo from './SwipVideo'
import { useTranslation } from "react-i18next";


function Vedios (){

    const {t} = useTranslation();

    const [videos, setVideos] = useState([videoArr])

    const videoSrc = "http://ds.serving-sys.com/BurstingRes/Site-2500/Type-16/1ff26f6a-aa27-4b30-a264-df2173c79623.mp4"

    useEffect(() => {
        setVideos(videoArr)
    })

    // useEffect(() => {
    //     fetch('http://93.189.40.27:2900/videos/')
    //       .then(response => response.json())
    //       .then(data => setVideos(data))
    //       .catch(err => console.error(err));
    //   }, [])

    return(
        <div className="vedios">
            <div className="vedios__box">
                <SwipVideo videos = {videos}/>
            </div>
            <div className="vedios__titleBox"> 
                <h2 className="vedios__title">{t(8)}</h2>
            </div>
        </div>
    )
}

export default Vedios