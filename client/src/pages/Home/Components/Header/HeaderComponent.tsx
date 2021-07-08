import React, { Fragment } from "react";
import MenuIcon from "../../../../assets/menu.svg";

const HeaderComponent = () => {
    const openNav = () => {
        const nav = document.querySelector(".header-nav");
        nav.classList.toggle("down");
    };

    return (
        <Fragment>
            <div className="header">
                <div className="subcontainer_header">
                    <div className="logo">OASIS</div>
                    <div className="btn_menu_container" onClick={openNav}>
                        <MenuIcon className="menu-icon" />
                    </div>
                </div>
            </div>

            <nav className="header-nav">
                <ul className="nav_menu_options">
                    <li className="option">Home</li>
                    <li className="option">Projects</li>
                    <li className="option">About</li>
                    <li className="option">Contact</li>
                </ul>
            </nav>
        </Fragment>
    );
};

export default HeaderComponent;
