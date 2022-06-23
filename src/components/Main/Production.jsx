import React from "react";
import BtnNavigation from "./BtnNavigation";

const btn = ["doors", "category2", "category3", "category4"]

function Production(){

    return(
        <div className="production">
            <div className="langpage__volume">
                <i class='bx bx-volume-full'></i>
            </div>
            <div className="production__infos">
                <h2 className="production__title">our production doors</h2>
                <p className="production__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum</p>
            </div>
            <div className="production__btnBox">
                {btn.map((item, i) => {
                    return (
                        <button key={i} className = "production__categoryBtn">{item}</button>
                    )
                })}
            </div>
            <BtnNavigation />
        </div>
    )
}

export default Production