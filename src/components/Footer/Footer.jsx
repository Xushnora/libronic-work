import React from "react";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="footer__rowBox">
                    <div className="footer__logoBox">
                        <Link to='/'>
                            <h2 className="footer__logo">Logo</h2>
                        </Link>
                    </div>
                    <div className="footer__mediaBox">
                        <button className="footer__mediaBtn">
                            <i className='bx bxl-instagram'></i>
                        </button>
                        <button className="footer__mediaBtn">
                            <i className='bx bxl-facebook-circle'></i>
                        </button>
                        <button className="footer__mediaBtn">
                            <i className='bx bxl-telegram'></i>
                        </button>
                    </div>
                </div>
                <div className="footer__info">
                    <h2 className="footer__title">Company</h2>
                    <div className="footer__listBox">
                        <ul className="footer__list">
                            <Link to = '/about'>
                                <li className="footer__item">About Us </li>
                            </Link>
                            <Link to = '/about'>
                                <li className="footer__item"> Press </li>
                            </Link>
                            <Link to = '/products'>
                                <li className="footer__item"> Products </li>
                            </Link>
                            <Link to = '/products'>
                                <li className="footer__item"> Investors </li>
                            </Link>
                            <Link to = '/products'>
                                <li className="footer__item"> Events </li>
                            </Link>
                            <Link to = '/products'>
                                <li className="footer__item"> Privacy policy </li>
                            </Link>
                        </ul>
                        <Link to = '/about'>
                            <p className="footer__contact">Contact Us</p>
                        </Link>
                    </div>
                    <p className="footer__text">© power 2021 - All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer