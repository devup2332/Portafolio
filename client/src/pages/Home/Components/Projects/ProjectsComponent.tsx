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
    //Template
    return (
        <div className="projects-component-container">
            <div className="projects-subcontainer">
                <h1 className="projects-component-title">PROJECTS</h1>

                <div className="projects">
                    <div className="item">
                        <h1 className="item-title">1. Chat App</h1>
                        <div className="item-primary-descr">
                            <p className="item-descr">
                                This application is a free chat with social authentication through Google. It also has a
                                complete form authentication system. Being in the application this account with handling
                                of amages and the implementation of sockets through Pusherjs
                            </p>
                            <div className="item-img-cont">
                                <img src={ChatImage1} alt="" />
                            </div>
                        </div>
                        <div className="item-second-descr">
                            <p className="item-descr">
                                This app also incorporates a dark theme to take care of the users' eyesight. All thisd
                                application was created with the following technologies
                            </p>
                            <div className="technologies-item">
                                <DjangoIcon />
                                <AngularIcon />
                                <DockerIcon />
                            </div>

                            <div className="btns-item">
                                <button className="btn-visit-item">
                                    <a href="https://my-chat.xyz" target="_blank">
                                        Visit
                                    </a>
                                </button>

                                <button className="btn-code-item">
                                    <a href="https://github.com/devup2332/ChatApp" target="_blank">
                                        Code
                                    </a>
                                </button>
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
                                On the other hand, we denounce with righteous On the other hand, we denounce with
                                righteous On the other hand, we denounce with righteous indignation and dislike men who
                                are so beguiled indignation and dislike men who are so beguiled indignation and dislike
                                men who are so beguiled
                            </p>
                            <div className="item-img-cont">
                                <img src={GalleryImage1} alt="" />
                            </div>
                        </div>
                        <div className="item-second-descr">
                            <p className="item-descr">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse commodi expedita aliquid
                                unde suscipit consequuntur!
                            </p>
                            <div className="technologies-item">
                                <DockerIcon />
                                <ReactIcon />
                                <NodeIcon />
                            </div>

                            <div className="btns-item">
                                <button className="btn-visit-item">
                                    <a href="https://my-gallery.xyz" target="_blank">
                                        Visit
                                    </a>
                                </button>

                                <button className="btn-code-item">
                                    <a href="https://github.com/devup2332/GalleryApp" target="_blank">
                                        Code
                                    </a>
                                </button>
                            </div>

                            <div className="item-img-cont">
                                <img src={GalleryImage2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsComponent;
