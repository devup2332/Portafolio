import React, { Fragment, MouseEvent, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "../../../../assets/menu.svg";

const HeaderComponent = () => {
    //Handler for close Nav
    const closeNav = (e: Event) => {
        const btn = document.querySelector(".btn_menu_container");
        if (!btn?.contains(e.target as Node)) {
            document.querySelector(".header-nav")?.classList.remove("down");
            document.removeEventListener("click", closeNav);
        }
    };

    //Basic function to close nav when user clicks aoutside nav
    const openNav = () => {
        const nav = document.querySelector(".header-nav");
        nav?.classList.toggle("down");

        document.addEventListener("click", closeNav, true);
    };

    useEffect(() => {
        //Handler of active header when window's scroll is more than 200
        const handleActive = () => {
            if (document.documentElement.scrollTop > 200) {
                document.querySelector(".header")?.classList.add("active");
            } else {
                document.querySelector(".header")?.classList.remove("active");
            }
        };

        //Handle windows scroll to set a active style to nav options
        const listenNavScroll = () => {
            const bannerH =
                document.querySelector(".banner_cont")?.clientHeight;
            const aboutH = document.querySelector(
                ".aboutcomponent-container"
            )?.clientHeight;
            const options =
                document.querySelector(".nav_menu_options")?.children;
            const scroll = document.documentElement.scrollTop;

            if (scroll < bannerH - 200) {
                for (let i = 0; i < options.length; i++) {
                    options[i].classList.remove("active");
                }
                options[0].classList.add("active");
            }

            if (scroll > bannerH - 200) {
                for (let i = 0; i < options.length; i++) {
                    options[i].classList.remove("active");
                }
                options[1].classList.add("active");
            }
            if (scroll > bannerH + aboutH - 200) {
                for (let i = 0; i < options.length; i++) {
                    options[i].classList.remove("active");
                }
                options[2].classList.add("active");
            }
        };

        document.addEventListener("scroll", handleActive);

        document.addEventListener("scroll", listenNavScroll);

        //Removing all linteners
        return () => {
            document.removeEventListener("click", closeNav);
            document.removeEventListener("scroll", handleActive);
            document.removeEventListener("scroll", listenNavScroll);
        };
    }, []);

    return (
        <Fragment>
            <div className="header">
                <div className="subcontainer_header">
                    <div className="logo">OASIS</div>

                    <nav className="header-nav">
                        <ul className="nav_menu_options">
                            <li
                                className="option"
                                onClick={() => scrollTo(0, 0)}
                            >
                                Home
                            </li>
                            <li
                                className="option"
                                onClick={() =>
                                    document
                                        .querySelector(
                                            ".aboutcomponent-container"
                                        )
                                        .scrollIntoView()
                                }
                            >
                                About
                            </li>
                            <li
                                className="option"
                                onClick={() =>
                                    document
                                        .querySelector(
                                            ".projects-component-container"
                                        )
                                        .scrollIntoView()
                                }
                            >
                                Projects
                            </li>
                            <NavLink to="/contact" className="option">
                                Contact
                            </NavLink>
                        </ul>
                    </nav>
                    <div className="btn_menu_container" onClick={openNav}>
                        <MenuIcon className="menu-icon" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default HeaderComponent;
