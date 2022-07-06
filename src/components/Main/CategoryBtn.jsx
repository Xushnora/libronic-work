import React, { useEffect, useState } from "react";

function CategoryBtn({ handlerClick, english, uzbek, russian }){

    const btnEng = [ "gates", "doors", "railing", "fences"]
    const btnRu = [ "ворота", "двери", "перила", "заборы"]
    const btnUz = [ "darvozalar", "eshiklar", "panjara", "to'siqlar"]
    const typeArr = [ '1', '2', '3', "4"]

    return(
            <div className="production__btnBox">
                {english && btnEng.map((item, i) => {
                    return (
                        <button onClick={handlerClick} key={i} id = {typeArr[i]} className = "production__categoryBtn">{item}</button>
                    )
                })}
                {russian && 
                    btnRu.map((item, i) => {
                    return (
                        <button onClick={handlerClick} key={i} id = {typeArr[i]} className = "production__categoryBtn">{item}</button>
                    )
                })}
                {uzbek && btnUz.map((item, i) => {
                    return (
                        <button onClick={handlerClick} key={i} id = {typeArr[i]} className = "production__categoryBtn">{item}</button>
                    )
                })}
            </div>
    )
}

export default CategoryBtn