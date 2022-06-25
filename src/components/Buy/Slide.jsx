import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Modal from "./Modal";

function Slide(){

    return(
        <div className="slide">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://imgur.com/CcW3GYi.jpg" className="slide__img d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://imgur.com/5tBC66q.jpg" className="slide__img d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://imgur.com/OlDIwGY.jpg" className="slide__img d-block w-100" alt="..." />
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
                            <div className="missionUs__btns">
                                <div className="missionUs__left">
                                    <Link to = "/products">
                                        <i className='bx bxs-left-arrow-alt'></i>
                                    </Link>
                                </div>
                                <div className="missionUs__volume">
                                    <i className='bx bx-search'></i>
                                    <i className='bx bx-volume-full'></i>
                                </div>
                            </div>
                        </div>
                        <h2 className="mission__title  animate__animated animate__bounceInRight animate__delay-2s">our production doors</h2>
                        <div className="slide__textRow">
                            <p className="mission__text  animate__animated animate__bounceInLeft animate__delay-2s">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum</p>
                            <div className="slide__btnCont">
                                <button 
                                    type="button" 
                                    className="mission__btn animate__animated animate__tada animate__delay-2s animate__repeat-2"  
                                    data-bs-toggle="modal" 
                                    data-bs-target="#exampleModal">
                                        buy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal />
            <Footer />
        </div>
    )
}

export default Slide