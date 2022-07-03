import React, { useState } from "react";

function Contact(){

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
            // alert("Iltimos, ismingizni kiriting!")
            setColor(true)
        } else if(number === "") {
            // alert("Iltimos, nomeringizni kiriting!")
            setColor(true)
        } else if(text === "") {
            // alert("Iltimos, xabaringizni kiriting!")
            setColor(true)
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
                            placeholder="Ismingiz" 
                            onChange={(e) => setNameValue(e.target.value)}
                            value = {nameValue}
                            required
                            style={{color: color ? "red" : "#999"}}
                        />
                    </div>
                    <div className="contact__inputBox">
                        <input 
                            type="number" 
                            name="number" 
                            id="number" 
                            placeholder="Telefon raqamingiz" 
                            required
                            onChange={(e) => setNumber(e.target.value)}
                            value = {number}
                        />
                    </div>
                    <div className="contact__areaBox">
                        <input 
                            type="text" 
                            placeholder="Xabar..."
                            onChange={(e) => setText(e.target.value)}
                            value = {text}
                        />
                    </div>
                    <button className="contact__btn" type="button" onClick={handlerSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact