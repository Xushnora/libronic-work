import React, { useEffect, useRef, useState } from "react";
import BtnNavigation from "./BtnNavigation";
import Mission from "./Mission";
import Footer from '../Footer/Footer'
import Category from "./Category";
import CategoryBtn from "./CategoryBtn";
import { useLocation } from "react-router-dom";
import musicData from '../../musicObj';


function Production({ 
    categoriesArr,
    productsArr,
    english,
    russian,
    uzbek,

    // **********
    products,
    doorObj
}){

    let location  = useLocation();
    // music 
    const [songs, setSongs] = useState(musicData());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(true);

    const [filteredArr, setFilteredArr] = useState(products)


    useEffect(() => {
        setFilteredArr( products )
    }, [])

    const handlerClick = (e) => {
        let btnValue = e.target.textContent;
            const newfilteredArr = products.filter((item) => {
                return item.category === +e.target.id
            })
            setFilteredArr(newfilteredArr);
    }

    // music

    const audioRef = useRef(null)

    const playSongHandler = () => {
        if(isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying)
    }

    return(
        <>
        {doorObj.map((item, i) => {
            if(item.id === +location.pathname.split('/').at(-1)) {
                return (
                    <div key={i} className="production col-1">
                        <div className="production__infos">
                            {uzbek &&
                                <>
                                    <h2 className="production__title">Biz ishlab chiqargan {item.name_uz}</h2>
                                    <p className="production__text">{item.description_uz}</p>
                                </>
                            }
                            {russian &&
                                <>
                                    <h2 className="production__title">НАША ПРОДУКЦИЯ {item.name_ru}</h2>
                                    <p className="production__text">{item.description_ru}</p>
                                </>
                            }
                            {english &&
                                <>
                                    <h2 className="production__title">our production {item.name_en}</h2>
                                    <p className="production__text">{item.description_en}</p>
                                </>
                            }
                        </div>
                        <div className="production__btnBox">
                            <CategoryBtn 
                                handlerClick = {handlerClick}
                                uzbek = {uzbek}
                                english = {english}
                                russian = {russian}
                            />
                        </div>
                        <div className="category">
                            <ul className="products__list row">
                                {filteredArr.map((item, i) => {
                                    return (
                                        <Category 
                                        key={i} 
                                        item = {item}
                                        english = {english}
                                        russian = {russian}
                                        uzbek = {uzbek}
                                    />
                                    )
                                })}
                            </ul>
                        </div>
                        <Mission />
                        <Footer />
                        <BtnNavigation />
                        <div className="langpage__volume" onClick={playSongHandler}>
                            <i className={isPlaying ? 'bx bx-volume-mute' : 'bx bx-volume-full'}></i>
                        </div>
                        <audio ref={audioRef} src={currentSong.audio}></audio>
                    </div>
                )
            }
        })}
        </>
    )
}

export default Production