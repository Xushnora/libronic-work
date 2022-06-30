import React, { useEffect, useState } from "react";

function Modal(){

    const [nameValue, setNameValue] = useState('')
    const [numValue, setNumValue] = useState('')

    let bot = {
        TOKEN: "5584930352:AAEnTPwZvUW9Ud_Ie5_aXMOmpLbB4c1Z560",
        chatID: "1022511791",
        message: `Ism: ${nameValue}, Raqam: ${numValue}`
    }

    function handlerSubmit (e) {

        if(nameValue === "") {
            alert("Iltimos, ismingizni kiriting!")
        } else if(numValue === "") {
            alert("Iltimos, nomeringizni kiriting!")
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
            setNumValue("")
        }
    }

    return(
        <>
            <div className="modal fade" id="exampleModal" tabIndex = "-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-body">
                        <div className="modalBox">
                            <form className="contact__form">
                                <div className="contact__inputBox">
                                    <input onChange={
                                        (e) => setNameValue(e.target.value)} 
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        placeholder="Ismingiz" 
                                        value={nameValue}
                                    required/>
                                </div>
                                <div className="contact__inputBox">
                                    <input 
                                        onChange={(e) => setNumValue(e.target.value)} 
                                        type="number" 
                                        name="number" 
                                        id="number" 
                                        placeholder="Telefon raqamingiz" 
                                        required
                                        value={numValue}
                                    />
                                </div>
                                <button 
                                    className="contact__btn" 
                                    type="submit" 
                                    onClick={handlerSubmit}
                                    data-bs-dismiss="modal" 
                                    aria-label="Close"
                                > Submit </button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal