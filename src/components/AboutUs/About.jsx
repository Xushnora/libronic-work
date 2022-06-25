import React from "react";
import Contact from "./Contact";
import MissonUs from "./MissonUs";
import Footer from '../Footer/Footer'
import Vedios from "./Videos";

function AboutUs(){

    return(
        <div className="about">
            <MissonUs />
            <div className="container">
                <div className="about__infoBox">
                    <ul className="about__list">
                        <li className="about__item">
                            <img className="about__itemImg" src="https://imgur.com/bNYpOv3.png" alt="setting" />
                            <p className="about__itemText">Many desktop publishing packages and web page editors now use</p>
                        </li>
                        <li className="about__item">
                            <img className="about__itemImg" src="https://imgur.com/kHmOYrY.png" alt="setting" />
                            <p className="about__itemText">Many desktop publishing packages and web page editors now use</p>
                        </li>
                        <li className="about__item">
                            <img className="about__itemImg" src="https://imgur.com/NcZFI6a.png" alt="list" />
                            <p className="about__itemText">Many desktop publishing packages and web page editors now use</p>
                        </li>
                        <li className="about__item">
                            <img className="about__itemImg" src="https://imgur.com/tyOQbW0.png" alt="location" />
                            <p className="about__itemText">Many desktop publishing packages and web page editors now use</p>
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