import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function Footer({ english, russian, uzbek }){

    const {t} = useTranslation();

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
                    <h2 className="footer__title">{t(18)}</h2>
                    <div className="footer__listBox">
                            <ul className="footer__list">
                                <Link to = '/about'>
                                    <li className="footer__item">{t(2)}</li>
                                </Link>
                                <Link to = '/about'>
                                    <li className="footer__item">{t(4)}</li>
                                </Link>
                                <Link to = '/products'>
                                    <li className="footer__item">{t(3)}</li>
                                </Link>
                                <Link to = '/products'>
                                    <li className="footer__item">{t(23)}</li>
                                </Link>
                                <Link to = '/products'>
                                    <li className="footer__item">{t(22)}</li>
                                </Link>
                                <Link to = '/products'>
                                    <li className="footer__item">{t(24)}</li>
                                </Link>
                            </ul>
                            <Link to = '/about'>
                                <p className="footer__contact">{t(6)}</p>
                            </Link>
                    </div>
                    <p className="footer__text">© power 2021 - {t(7)}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer