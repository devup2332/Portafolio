import React from "react";
import HeaderComponent from "../Header/HeaderComponent";
import DownIcon from "../../../../assets/down.svg";
import BannerImage from "../../../../assets/images/banner.png";

const BannerComponent = () => {
    return (
        <div className="banner_cont">
            <HeaderComponent />
            <div className="banner_body">
                <h1 className="banner_title">DIEGO ROJAS</h1>
                <p className="banner_subtitle">FULL STACK DEVELOPER</p>
                <button className="banner_btn_contact">Contact Me</button>
                <img src={BannerImage} className="banner-image" alt="" />
            </div>

            <DownIcon className="arrow-icon" />
        </div>
    );
};

export default BannerComponent;
