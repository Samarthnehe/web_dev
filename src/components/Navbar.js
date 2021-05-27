import React from 'react';
import './Navbar.css';


function Navbar() {
    return (
        <div className="navbar">
            <div className="nav__blank">

            </div>
            <div className="navbar__options">
                <div className="nav__op1">
                    <a>About</a>
                    <a>Team</a>
                    <a>Pricing</a>
                    <a>Issues</a>
                    <a>Signin</a>
                </div>
                <div className="nav__op2">
                     <input type="text" className="navbar__search fas" placeholder="Get more                                  &#xf002;"></input>
                </div>
               
       
            </div>
            
        </div>
    )
}

export default Navbar
