import React from "react";
import { Link } from "react-router-dom";
function BtnNavigation(){
    return(
            <div>
                <div className="products__btnGroup">
                    {/* <Link to='/'> */}
                        <button className="products__btns">A</button>
                    {/* </Link> */}
                    <Link to='/production'>
                        <button className="products__btns"><i class='bx bx-briefcase-alt-2'></i></button>
                    </Link>
                    <button className="products__btns"><i class='bx bx-group'></i></button>
                    <button className="products__btns">?</button>
                    <button className="products__btns"><i class='bx bx-phone-call'></i></button>
                </div>
            </div>
    )
}

export default BtnNavigation