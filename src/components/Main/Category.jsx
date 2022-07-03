import React from "react";
import { Link } from "react-router-dom";

function Category({ item }){

    return(
        <li className="products__item col-6">
            <Link to={`/description/${item.id}`}>
                <img className="products__imgBox" src={item.image1} alt="door" />
                <div className="products__infoBox">
                    <h3 className="products__title animate__animated animate__bounceInRight animate__delay-2s">{item.name_en}</h3>
                    <p className="products__text animate__animated animate__bounceInLeft animate__delay-2s">{item.description_en}</p>
                </div>
            </Link>
        </li>
    )
}

export default Category