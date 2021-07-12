import React, { Fragment, MouseEvent, useEffect } from "react";
import MenuIcon from "../../../../assets/menu.svg";

const HeaderComponent = () => {
    //Handler for close Nav
    const closeNav = (e: Event) => {
        const btn = document.querySelector(".btn_menu_container");
        if (!btn.contains(e.target as Node)) {
            document.querySelector(".header-nav").classList.remove("down");
            document.removeEventListener("click", closeNav);
        }
    };

    //Basic function to close nav when user clicks aoutside nav
    const openNav = () => {
        const nav = document.querySelector(".header-nav");
        nav.classList.toggle("down");

        document.addEventListener("click", closeNav, true);
    };

    useEffect(() => {
        document.addEventListener("scroll", (e) => {
            if (document.documentElement.scrollTop > 200) {
                document.querySelector(".header").classList.add("active");
            } else {
                document
                    .querySelector(".header")
                    .classList.remove("active");
            }
        });
    }, []);
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
