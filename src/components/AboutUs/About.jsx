import Contact from "./Contact";
import MissonUs from "./MissonUs";
import Footer from '../Footer/Footer'
import Vedios from "./Videos";
import { useTranslation } from "react-i18next";

function AboutUs({
    isPlaying, 
    setIsPlaying, 
    currentSong, 
    uzbek, 
    english, 
    russian
}){

    const {t} = useTranslation();

    return(
        <div className="about">
            <MissonUs isPlaying={isPlaying}  setIsPlaying = {setIsPlaying} currentSong = {currentSong}/>
            <div className="container">
                <div className="about__infoBox">
                    <ul className="about__list">
                        <li className="about__item">
                            <img className="about__itemImg trueImg" src="https://imgur.com/bNYpOv3.png" alt="setting" />
                            <p className="about__itemText">{t(15)}</p>
                        </li>
                        <li className="about__item">
                            <img className="about__itemImg settingImg" src="https://imgur.com/kHmOYrY.png" alt="setting" />
                            <p className="about__itemText">{t(13)}</p>
                        </li>
                        <li className="about__item">
                            <img className="about__itemImg listImg" src="https://imgur.com/NcZFI6a.png" alt="list" />
                            <p className="about__itemText">{t(17)}</p>
                        </li>
                        <li className="about__item">
                            <img className="about__itemImg locationImg" src="https://imgur.com/tyOQbW0.png" alt="location" />
                            <p className="about__itemText">{t(16)}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <Vedios />
            <div className="container">
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs