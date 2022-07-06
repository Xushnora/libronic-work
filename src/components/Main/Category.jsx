import React from "react";
import { Link } from "react-router-dom";

function Category({ item, english, russian, uzbek }){

    return(
        <li className="products__item col-6">
            <Link to={`/description/${item.id}`}>
                <img className="products__imgBox" src={item.image1} alt="door" />
                <div className="products__infoBox">
                    {english && 
                    <>
                        <h3 className="products__title animate__animated animate__bounceInRight animate__delay-2s">{item.name_en}</h3>
                        <p className="products__text animate__animated animate__bounceInLeft animate__delay-2s">{item.description_en}</p>
                    </>
                    }
                    {russian && 
                    <>
                        <h3 className="products__title animate__animated animate__bounceInRight animate__delay-2s">{item.name_ru}</h3>
                        <p className="products__text animate__animated animate__bounceInLeft animate__delay-2s">{item.description_ru}</p>
                    </>
                    }
                    {uzbek && 
                    <>
                        <h3 className="products__title animate__animated animate__bounceInRight animate__delay-2s">{item.name_uz}</h3>
                        <p className="products__text animate__animated animate__bounceInLeft animate__delay-2s">{item.description_uz}</p>
                    </>
                    }
                </div>
            </Link>
        </li>
    )
}

export default Category