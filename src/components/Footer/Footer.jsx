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
                            <i className='bx bxl-twitter'></i>
                        </button>
                        <button className="footer__mediaBtn">
                            <i className='bx bxl-github'></i>
                        </button>
                        <button className="footer__mediaBtn">
                            <i className='bx bxl-linkedin-square'></i>
                        </button>
                    </div>
                </div>
                <div className="footer__info">
                    <h2 className="footer__title">Company</h2>
                    <div className="footer__listBox">
                        <ul className="footer__list">
                            <li className="footer__item">About Us </li>
                            <li className="footer__item"> Press </li>
                            <li className="footer__item"> Investors </li>
                            <li className="footer__item"> Events </li>
                            <li className="footer__item"> Terms of use </li>
                            <li className="footer__item"> Privacy policy </li>
                        </ul>
                        <p className="footer__contact">Contact Us</p>
                    </div>
                    <p className="footer__text">© power 2021 - All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer