import React from "react";
function Modal(){
    return(
        <>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-body">
                        <div className="modalBox">
                            <form className="contact__form">
                                <div className="contact__inputBox">
                                    <input type="text" name="name" id="name" placeholder="Ismingiz" required/>
                                </div>
                                <div className="contact__inputBox">
                                    <input type="number" name="number" id="number" placeholder="Telefon raqamingiz" required/>
                                </div>
                                <button className="contact__btn" type="submit">Submit</button>
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