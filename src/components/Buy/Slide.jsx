import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Modal from "./Modal";

function Slide({ 
    productsArr,
    isPlaying,
    setIsPlaying,
    currentSong,
    english,
    uzbek,
    russian,

    // !!!!!!!!!
    products
 }){

    const location = useLocation()

    const audioRef = useRef(null)
    
    // useEffect(() => {
    //   audioRef.current.play();
    // }, [])
  
  
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
        {products.map((item, i) => {
            if(item.id === +location.pathname.split('/').at(-1)) {
                return (
                    <>
                        <div className="slide">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={item.image1} className="slide__img d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={item.image2} className="slide__img d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={item.image3} className="slide__img d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="slide__acsess">
                                <div className="slide__acsessBox">
                                    <div className="container">
                                        <div className="slide__btnBox">
                                            <div className="missionUs__btns slideBtnBox">
                                                <div className="missionUs__left slide-left leftBtn">
                                                    <Link to = "/products">
                                                        <i className='bx bxs-left-arrow-alt'></i>
                                                    </Link>
                                                </div>
                                                <div className="missionUs__volume slide-volume">
                                                    <div className="missonUs__searchBtn">
                                                        <i className='bx bx-search'></i>
                                                    </div>
                                                    <div className="missionUs__volumeBtn" onClick={playSongHandler}>
                                                        <i className={isPlaying ? 'bx bx-volume-mute' : 'bx bx-volume-full'}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="slide__textBox">
                                            {english && 
                                                <h2 className="mission__title  animate__animated animate__bounceInRight animate__delay-2s">our production {item.name_en}</h2>
                                            }
                                            {russian && 
                                                <h2 className="mission__title  animate__animated animate__bounceInRight animate__delay-2s">НАША ПРОДУКЦИЯ {item.name_ru}</h2>
                                            }
                                            {uzbek && 
                                                <h2 className="mission__title  animate__animated animate__bounceInRight animate__delay-2s">Biz ishlab chiqargan {item.name_uz}</h2>
                                            }
                                            <div className="slide__textRow">
                                                {english &&
                                                    <p className="mission__text slideMatn animate__animated animate__bounceInLeft animate__delay-2s">{item.description_en}</p>
                                                }
                                                {russian &&
                                                    <p className="mission__text slideMatn animate__animated animate__bounceInLeft animate__delay-2s">{item.description_ru}</p>
                                                }
                                                {uzbek &&
                                                    <p className="mission__text slideMatn animate__animated animate__bounceInLeft animate__delay-2s">{item.description_uz}</p>
                                                }
                                                <div className="slide__btnCont">
                                                    <button 
                                                        type="button" 
                                                        className="mission__btn buy-btn button animate__animated animate__tada animate__delay-2s animate__repeat-2"  
                                                        data-bs-toggle="modal" 
                                                        data-bs-target="#exampleModal">
                                                            {t(21)}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <audio ref={audioRef} src={currentSong.audio}></audio>
                                    </div>
                                </div>
                            </div>
                            <Modal />
                        </div>
                        <Footer />
                    </>
                )
            }
        })}

        </>
    )
}

export default Slide