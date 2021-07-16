import React from "react";
import { NavLink } from "react-router-dom";
import Wave from "../../../../assets/images/wave-footer.png";

const FooterComponent = () => {
    return (
        <div className="footer-component-container">
            <div className="footer-body">
                <h1 className="footer-logo">OASIS</h1>
                <ul className="options">

                            <li
                                className="option-item"
                                onClick={() => scrollTo(0, 0)}
                            >
                                Home
                            </li>
                            <li
                                className="option-item"
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
                                className="option-item"
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
                    <NavLink to="/contact" className="option-items-item">
                        Contact
                    </NavLink>
                </ul>
            </div>
            <img src={Wave} alt="" />
        </div>
    );
};

export default FooterComponent;
