import React, { useState } from "react";
import videoObj from '../../VideoObj'


function Vedios(){

    const [count, setCount] = useState(0)

    const handlerRightBtn = () => {
        setCount(count + 1)
    }

    const handlerLeftBtn = () => {
        setCount(count - 1);

    }

    return(
        <div className="vedios">
            <div className="vedios__box">
                <button onClick={handlerRightBtn} className="slider__rightBtn" style={{display: `${(count !== videoObj.length - 2) ? "block" : "none" }`}}>
                    <i className='bx bx-chevron-right'></i>
                </button>
                <button onClick={handlerLeftBtn} className="slider__leftBtn"  style={{display: `${(count === -1) ? "none" : "block" }`}}>
                    <i className='bx bx-chevron-left'></i>
                </button>
                <ul className="vedios__list" style={{transform: `translateX(${-count * 800}px)`}}>
                    {videoObj.map((item, i) => {
                        return (
                            <li key={i} className="vedios__item" >
                                <video controls className="vedios__video" src={item.media}></video>
                                <div className="vedios__icons">
                                    <div className="vedios__animat"></div>
                                    <i className='bx bx-play-circle'></i>
                                </div>
                            </li>
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