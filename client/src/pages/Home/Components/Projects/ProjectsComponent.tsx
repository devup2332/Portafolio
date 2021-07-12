import React from "react";
import ChatImage1 from "../../../../assets/images/project-item-1.png";
import ChatImage2 from "../../../../assets/images/project-item-2.png";
import GalleryImage1 from "../../../../assets/images/project-item-2-1.png";
import GalleryImage2 from "../../../../assets/images/project-item-2-2.png";
import DjangoIcon from "../../../../assets/django _color 2.svg";
import DockerIcon from "../../../../assets/docker_color 1.svg";
import AngularIcon from "../../../../assets/angular _color 2.svg";
import ReactIcon from "../../../../assets/react (1) 2.svg";
import NodeIcon from "../../../../assets/node-js_color 1.svg";

const ProjectsComponent = () => {
    return (
        <div className="projects-component-container">
            <h1 className="projects-component-title">PROJECTS</h1>

            <div className="projects">
                <div className="item">
                    <h1 className="item-title">1. Chat App</h1>
                    <div className="item-primary-descr">
                        <p className="item-descr">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse commodi expedita aliquid unde suscipit
                            consequuntur!
                        </p>
                        <div className="item-img-cont">
                            <img src={ChatImage1} alt="" />
                        </div>
                    </div>
                    <div className="item-second-descr">
                        <p className="item-descr">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse commodi expedita aliquid unde suscipit
                            consequuntur!
                        </p>
                        <div className="technologies-item">
                            <DjangoIcon />
                            <AngularIcon />
                            <DockerIcon />
                        </div>

                        <div className="btns-item">
                            <button className="btn-visit-item">Visit</button>

                            <button className="btn-code-item">Code</button>
                        </div>

                        <div className="item-img-cont">
                            <img src={ChatImage2} alt="" />
                        </div>
                    </div>
                </div>

                <div className="item">
                    <h1 className="item-title">2. Gallery App</h1>
                    <div className="item-primary-descr">
                        <p className="item-descr">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse commodi expedita aliquid unde suscipit
                            consequuntur!
                        </p>
                        <div className="item-img-cont">
                            <img src={GalleryImage1} alt="" />
                        </div>
                    </div>
                    <div className="item-second-descr">
                        <p className="item-descr">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse commodi expedita aliquid unde suscipit
                            consequuntur!
                        </p>
                        <div className="technologies-item">
                            <DockerIcon />
                            <ReactIcon />
                            <NodeIcon />
                        </div>

                        <div className="btns-item">
                            <button className="btn-visit-item">Visit</button>

                            <button className="btn-code-item">Code</button>
                        </div>

                        <div className="item-img-cont">
                            <img src={GalleryImage2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsComponent;
