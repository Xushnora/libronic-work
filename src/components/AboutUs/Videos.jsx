import React, { useEffect, useState } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Vedios(){

    const [count, setCount] = useState(0)
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch('http://93.189.40.27:2900/videos/')
          .then(response => response.json())
          .then(data => setVideos(data))
          .catch(err => console.error(err));
      }, [])

    const handlerRightBtn = () => {
        setCount(count + 1)
    }

    const handlerLeftBtn = () => {
        setCount(count - 1);

    }

    return(
        <div className="vedios">
            <div className="vedios__box">
                <button onClick={handlerRightBtn} className="slider__rightBtn" style={{display: `${(count !== videos.length - 2) ? "block" : "none" }`}}>
                    <i className='bx bx-chevron-right'></i>
                </button>
                <button onClick={handlerLeftBtn} className="slider__leftBtn"  style={{display: `${(count === -1) ? "none" : "block" }`}}>
                    <i className='bx bx-chevron-left'></i>
                </button>
                <ul className="vedios__list" style={{transform: `translateX(${-count * 800}px)`}}>
                    {videos.map((item, i) => {
                        return (
                            <div key={i} className="vedios__item" >
                                <video controls className="vedios__video" src={item.link}></video>
                                <div className="vedios__icons">
                                    <div className="vedios__animat"></div>
                                    <i className='bx bx-play-circle'></i>
                                </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
            <div className="vedios__titleBox"> 
                <h2 className="vedios__title">testimonials about us</h2>
            </div>
        </div>
    )
}

export default Vedios