import React from "react";
import HeaderComponent from "../Header/HeaderComponent";
import DownIcon from "../../../../assets/down.svg";
import BannerImage from "../../../../assets/images/banner.png";
import {NavLink} from "react-router-dom";

const BannerComponent = () => {

    const goToAbout = () => {
        const banH = document.querySelector('.banner_cont').clientHeight;
        const headH = document.querySelector('.header').clientHeight;
        document.documentElement.scrollTo({
            top: banH - headH,
            behavior: "smooth"
        })
    }

    return (
        <div className="banner_cont">
            <HeaderComponent />
            <div className="banner_body">
                <h1 className="banner_title">DIEGO ROJAS</h1>
                <p className="banner_subtitle">FULL STACK DEVELOPER</p>
                <NavLink to="/contact" className="banner_btn_contact">Contact Me</NavLink>
                <img src={BannerImage} className="banner-image" alt="" />
            </div>

            <DownIcon className="arrow-icon" onClick={goToAbout} />
        </div>
    );
};

export default BannerComponent;
