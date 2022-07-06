import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'

function Mission(){
    const {t} = useTranslation();
    return(
        <div className="mission">
            <div className="container">
                <h2 className="mission__title animate__animated animate__bounceInRight animate__delay-2s">{t(20)}</h2>
                <p className="mission__text animate__animated animate__bounceInLeft animate__delay-2s">{t(14)}</p>
                <div className="mission__btnGroup">
                    <Link to = '/about'>
                        <button className="mission__btn button animate__animated animate__tada animate__delay-2s">{t(5)}</button>
                    </Link>
                    <Link to = '/products'>
                        <button className="mission__btn button animate__animated animate__tada animate__delay-2s">{t(1)}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Mission