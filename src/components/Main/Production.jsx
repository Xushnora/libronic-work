import React, { useEffect, useState } from "react";
import BtnNavigation from "./BtnNavigation";
import Mission from "./Mission";
import Footer from '../Footer/Footer'
import Category from "./Category";
import CategoryBtn from "./CategoryBtn";
import obj from '../../categoryDoorsObj'

function Production(){

    const [filteredArr, setFilteredArr] = useState([])

    useEffect(() => {
        setFilteredArr(obj)
    }, [])

    console.log(filteredArr);

    return(
        <div className="production">
            <div className="langpage__volume">
                <i className='bx bx-volume-full'></i>
            </div>
            <div className="production__infos">
                <h2 className="production__title">our production doors</h2>
                <p className="production__text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum</p>
            </div>
            <CategoryBtn 
                setFilteredArr = {setFilteredArr}
                obj = {obj}
            />
            <Category filteredArr = {filteredArr}/>
            <Mission />
            <Footer />
            <BtnNavigation />
        </div>
    )
}

export default Production