import React, { useEffect, useRef, useState } from "react";
import BtnNavigation from "./BtnNavigation";
import Mission from "./Mission";
import Footer from '../Footer/Footer'
import Category from "./Category";
import CategoryBtn from "./CategoryBtn";
import { useLocation } from "react-router-dom";


function Production({ 
    categoriesArr,
    productsArr,

    // **********
    products,
    doorObj
}){

    let location  = useLocation();

    const [filteredArr, setFilteredArr] = useState(products)


    useEffect(() => {
        setFilteredArr( products )
    }, [])

    const handlerClick = (e) => {
        let btnValue = e.target.textContent;

        if(btnValue === "Barchasi") {
            setFilteredArr(products);
        } else if(btnValue != "Barchasi") {
            const newfilteredArr = products.filter((item) => {
                return item.category === +e.target.id
            })
            setFilteredArr(newfilteredArr);
        }
        else{setFilteredArr(products)}
    }

    return(
        <>
        {/* <div className="langpage__volume">
            <i className='bx bx-volume-full'></i>
        </div> */}
        {doorObj.map((item, i) => {
            if(item.id === +location.pathname.split('/').at(-1)) {
                return (
                    <div key={i} className="production col-1">
                        <div className="production__infos">
                                <h2 className="production__title">our production {item.name_en}</h2>
                                <p className="production__text">{item.description_en}</p>
                        </div>
                        <div className="production__btnBox">
                            <CategoryBtn 
                                handlerClick = {handlerClick}
                            />
                        </div>
                        <div className="category">
                            <ul className="products__list row">
                                {filteredArr.map((item, i) => {
                                    return (
                                        <Category key={i} item = {item}/>
                                    )
                                })}
                            </ul>
                        </div>
                        <Mission />
                        <Footer />
                        <BtnNavigation />
                    </div>
                )
            }
        })}
        </>
    )
}

export default Production