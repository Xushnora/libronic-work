import React from "react";
import { Link } from "react-router-dom";
function BtnNavigation(){
    return(
            <div>
                <div className="products__btnGroup">
                    <Link to='/'>
                        <button className="products__btns">Aa</button>
                    </Link>
                    <Link to='/products'>
                        <button className="products__btns"><i className='bx bx-briefcase-alt-2'></i></button>
                    </Link>
                    <Link to= '/about'>
                        <button className="products__btns"><i className='bx bx-group'></i></button>
                    </Link>
                    <Link to='/about'>
                        <button className="products__btns">
                            <i className='bx bx-question-mark'></i>
                        </button>
                    </Link>
                    <Link to='/about'>
                        <button className="products__btns"><i className='bx bx-phone-call'></i></button>
                    </Link>
                </div>
            </div>
    )
}

export default BtnNavigation