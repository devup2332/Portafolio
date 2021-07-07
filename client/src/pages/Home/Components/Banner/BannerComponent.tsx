import React from "react";
import HeaderComponent from "../Header/HeaderComponent";

const BannerComponent = () => {
    return (
        <div className="banner_cont">
            <HeaderComponent />
            <div className="banner_body">
                <h1 className="banner_title">DIEGO ROJAS</h1>
                <p className="banner_subtitle">FULL STACK DEVELOPER</p>
                <button className="banner_btn_contact">Contact Me</button>
            </div>
        </div>
    );
};

export default BannerComponent;
