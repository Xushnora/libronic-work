import React from "react";
import { useTranslation } from "react-i18next";

function Category({filteredArr}){
    const {t, i18n} = useTranslation();

    return(
        <div className="category">
                <ul className="products__list">
                    {filteredArr.map((item, i) => {
                        return (
                            <li key={i} className="products__item">
                                <img className="products__imgBox" src={item.img} alt="door" />
                                <div className="products__infoBox">
                                    <span className="products__span animate__animated animate__bounceInLeft animate__delay-2s">{item.category}</span>
                                    <h3 className="products__title animate__animated animate__bounceInRight animate__delay-2s">{item.title}</h3>
                                    <p className="products__text animate__animated animate__bounceInLeft animate__delay-2s">{item.desc}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
        </div>
    )
}

export default Category