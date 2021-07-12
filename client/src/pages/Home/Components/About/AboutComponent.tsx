import React from "react";
import DjangoIcon from "../../../../assets/django _color 2.svg";
import AngularIcon from "../../../../assets/angular _color 2.svg";
import ReactIcon from "../../../../assets/react (1) 2.svg";
import WebpackIcon from "../../../../assets/webpack_color 1.svg";
import JsIcon from "../../../../assets/javascript_color 1.svg";
import PythonIcon from "../../../../assets/python_color 2.svg";
import NodeIcon from "../../../../assets/node-js_color 1.svg";

const AboutComponent = () => {
    return (
        <div className="aboutcomponent-container">
            <div className="about-subcontainer">
                <h1 className="about-title">ABOUT ME</h1>
                <p className="about-description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum{" "}
                </p>
                <button type="button" className="about-btn-cv">
                    Download CV
                </button>
            </div>
            <div className="about-right-container">
                <div className="icon-container">
                    <DjangoIcon />
                </div>

                <div className="icon-container">
                    <AngularIcon />
                </div>

                <div className="icon-container">
                    <ReactIcon />
                </div>
                <div className="icon-container">
                    <WebpackIcon />
                </div>
                <div className="icon-container">
                    <JsIcon />
                </div>

                <div className="icon-container">
                    <PythonIcon/>
                </div>
                <div className="icon-container">
                    <NodeIcon />
                </div>
            </div>
        </div>
    );
};

export default AboutComponent;
