import React from "react";

function Header(){
    return (
        <div id="header">
            <div className="header-item">
            <div><ul className="header-ul1">
                    <li className="header-list-item "><a href="#about-below">About Me</a></li>
                    <li className="header-list-item "><a href="#skills">Resume</a></li>
                    {/* <li className="header-list-item "><a href="#footer">Projects</a></li> */}
                </ul></div>
            <div>
            <ul className="header-ul2">
                    <li className="header-list-item "><a href="#footer">Contact Me</a></li>
                </ul>
            </div>                
            </div>
        </div>
    );
}

export default Header;