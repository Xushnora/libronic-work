import React from "react";

function Contact(){
    return(
        <div className="Contact">
            <form className="contact__form">
                <div className="contact__inputBox">
                    <input type="text" name="name" id="name" placeholder="Ismingiz" required/>
                </div>
                <div className="contact__inputBox">
                    <input type="number" name="number" id="number" placeholder="Telefon raqamingiz" required/>
                </div>
                <div className="contact__areaBox">
                    <textarea name="text" id="text" cols="45" rows="5" placeholder="Xabar..."></textarea>
                </div>
                <button className="contact__btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact