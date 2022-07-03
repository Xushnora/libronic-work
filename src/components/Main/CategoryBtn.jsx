import React, { useEffect, useState } from "react";

function CategoryBtn({ handlerClick }){

    const btn = [ "Barchasi", "darvozalar", "eshiklar", "panjara", "to'siqlar"]
    const typeArr = ["", '1', '2', '3', "4"]

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