import React from "react";
import { useTranslation } from "react-i18next";
import {Link} from 'react-router-dom'

function LangPage({changeLanguage}){
    const {t, i18n} = useTranslation()

    return(
        <div className="langpage">
            <div className="langpage__volume">
                <i class='bx bx-volume-full'></i>
            </div>
            <div className="langpage__titleBox">
                <h2 className="langpage__title">choose language</h2>
            </div>
            <div className="langpage__btnsBox">
                <Link to= '/products'>
                    <button onClick={() => changeLanguage('uz')} className="langpage__btn">uzbek</button>
                </Link>
                <Link to= '/products'>
                    <button onClick={() => changeLanguage('eng')} className="langpage__btn">english</button>
                </Link>
                <Link to= '/products'>
                    <button onClick={() => changeLanguage('ru')} className="langpage__btn">russian</button>
                </Link>
            </div>
        </div>
    )
}

export default LangPage