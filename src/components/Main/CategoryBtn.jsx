import React, { useEffect, useState } from "react";

function CategoryBtn({ setFilteredArr, productsArr }){

    const btn = [ "Barchasi", "darvozalar", "eshiklar", "panjara", "to'siqlar"]
    const typeArr = ["", '1', '2', '3', "4"]

    const handlerClick = (e) => {
            let btnValue = e.target.textContent;

            if(btnValue === "Barchasi") {
                setFilteredArr(productsArr);
            } else {
                const newfilteredArr = productsArr.filter((item) => {
                    return item.category === +e.target.id
                })
                setFilteredArr(newfilteredArr);
            }
    }

    return(
            <div className="production__btnBox">
                {btn.map((item, i) => {
                    return (
                        <button onClick={handlerClick} key={i} id = {typeArr[i]} className = "production__categoryBtn">{item}</button>
                    )
                })}
            </div>
    )
}

export default CategoryBtn