import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import obj from '../../doorsObj'
import Footer from '../Footer/Footer'
import BtnNavigation from "./BtnNavigation";

function Products(){

    const {t, i18n} = useTranslation();

    return(
        <>
            <div className="products">
                <div className="products__nameBox">
                    <h2 className="products__name animate__animated animate__bounceInDown animate__delay-2s">{t('products')}</h2>
                </div>
                <ul className="products__list">
                    {obj.map((item) => {
                        return (
                            <li key={item.id} className="products__item">
                                <img className="products__imgBox" src={item.img} alt="door" />
                                <div className="products__infoBox">
                                    <span className="products__span animate__animated animate__bounceInLeft animate__delay-2s">{t('art')}</span>
                                    <h3 className="products__title animate__animated animate__bounceInRight animate__delay-2s">{item.title}</h3>
                                    <p className="products__text animate__animated animate__bounceInLeft animate__delay-2s">{item.desc}</p>
                                    <button className="products__button">
                                        <p>{t('Explore more')}</p>
                                        <i class='bx bx-chevrons-right'></i>
                                    </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <BtnNavigation />
            </div>
            <Footer />
        </>
    )
}

export default Products