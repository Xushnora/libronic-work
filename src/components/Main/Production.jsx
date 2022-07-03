import React, { useEffect, useRef, useState } from "react";
import BtnNavigation from "./BtnNavigation";
import Mission from "./Mission";
import Footer from '../Footer/Footer'
import Category from "./Category";
import CategoryBtn from "./CategoryBtn";
import { useLocation } from "react-router-dom";


function Production({ 
    isPlaying, 
    setIsPlaying, 
    currentSong, 
    categoriesArr,
    productsArr,
    english,
    russian,
    uzbek,

    // **********
    products
}){

    let location  = useLocation();

    const audioRef = useRef(null)
    
    // useEffect(() => {
    //     audioRef.current.play();
    // }, [])

    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying)
    }

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
        <div className="langpage__volume" onClick={playSongHandler}>
            <i className={isPlaying ? 'bx bx-volume-mute' : 'bx bx-volume-full'}></i>
        </div>
        {categoriesArr.map((item, i) => {
            if(item.id === +location.pathname.split('/').at(-1)) {
                return (
                    <div key={i} className="production col-1">
                        <div className="production__infos">
                            {english && 
                                <h2 className="production__title">our production {item.name_en}</h2>
                            }
                            {russian &&                      /* наше производство */
                                <h2 className="production__title">our production {item.name_en}</h2>
                            }
                            {uzbek && 
                                <h2 className="production__title">Biz ishlab chiqargan {item.name_uz}</h2>
                            }
                            {english &&
                                <p className="production__text">{item.description_en}</p>
                            }
                            {russian &&
                                <p className="production__text">{item.description_en}</p>
                            }
                            {uzbek &&
                                <p className="production__text">{item.description_uz}</p>
                            }
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
                        <audio ref={audioRef} src={currentSong.audio}></audio>
                    </div>
                )
            }
        })}
        </>
    )
}

export default Production