import React from "react";
import { NavLink } from "react-router-dom";
import Wave from "../../../../assets/images/wave-footer.png";

const FooterComponent = () => {
    return (
        <div className="footer-component-container">
            <div className="footer-body">
                <h1 className="footer-logo">OASIS</h1>
                <ul className="options">
                    <li className="options-item">Home</li>
                    <li className="options-item">Projects</li>
                    <li className="options-item">About</li>
                    <NavLink to="/contact" className="options-item">
                        Contact
                    </NavLink>
                </ul>
            </div>
            <img src={Wave} alt="" />
        </div>
    );
};

export default FooterComponent;
