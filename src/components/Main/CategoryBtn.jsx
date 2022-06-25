import React from "react";

function CategoryBtn({setFilteredArr, obj}){

    const btn = [ "All", "category1", "category2", "category3", "category4"]
    const typeArr = ["", 'category1', 'category2', 'category3', 'category4']

    const handlerClick = (e) => {
            let btnValue = e.target.textContent;

            if(btnValue === "All") {
                setFilteredArr(obj);
            } else {
                const newfilteredArr = obj.filter((item) => {
                    return item.category === e.target.id
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