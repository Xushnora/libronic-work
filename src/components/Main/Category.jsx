import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Category({filteredArr}){
    const {t, i18n} = useTranslation();

    return(
        <div className="category">
                <ul className="products__list">
                    {filteredArr.map((item, i) => {
                        return (
                            <li key={i} className="products__item">
                                <Link to={`/description/${item.id}`}>
                                    <img className="products__imgBox" src={item.image1} alt="door" />
                                    <div className="products__infoBox">
                                        <h3 className="products__title animate__animated animate__bounceInRight animate__delay-2s">{item.name_en}</h3>
                                        <p className="products__text animate__animated animate__bounceInLeft animate__delay-2s">{item.description_en}</p>
                                    </div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
        </div>
    )
}

export default Category