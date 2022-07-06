import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Contact(){

    const {t} = useTranslation();

    let [nameValue, setNameValue] = useState('')
    let [number, setNumber] = useState('')
    let [text, setText] = useState('')
    let [color, setColor] = useState(false)

    let bot = {
        TOKEN: "5584930352:AAEnTPwZvUW9Ud_Ie5_aXMOmpLbB4c1Z560",
        chatID: "1022511791",
        message: `Ism: ${nameValue}, Raqam: ${number}, Xabar: ${text}`
    }

    function handlerSubmit (e) {
        console.log(nameValue, number, text);

        if(nameValue === "") {
            alert("Iltimos, ismingizni kiriting!")
            // setColor(true)
        } else if(number === "") {
            alert("Iltimos, nomeringizni kiriting!")
            // setColor(true)
        } else if(text === "") {
            alert("Iltimos, xabaringizni kiriting!")
            // setColor(true)
        } else {
            fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message}`, {
                method : "GET"
            })
            .then(success => {
                console.log("send message")
            }, error => {
                console.log(error);
            })
            alert("Xabar yuborganingiz uchun tashakkur!")

            setNameValue("")
            setNumber("")
            setText("")
        }
    }

    return(
        <>
            <div className="Contact">
                <form className="contact__form">
                    <div className="contact__inputBox">
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder={t(9)} 
                            onChange={(e) => setNameValue(e.target.value)}
                            value = {nameValue}
                            required
                        />
                    </div>
                    <div className="contact__inputBox">
                        <input 
                            type="number" 
                            name="number" 
                            id="number" 
                            placeholder={t(10)} 
                            required
                            onChange={(e) => setNumber(e.target.value)}
                            value = {number}
                        />
                    </div>
                    <div className="contact__areaBox">
                        <input 
                            type="text" 
                            placeholder={t(11)}
                            onChange={(e) => setText(e.target.value)}
                            value = {text}
                        />
                    </div>
                    <button className="contact__btn" type="button" onClick={handlerSubmit}>{t(12)}</button>
                </form>
            </div>
        </>
    )
}

export default Contact