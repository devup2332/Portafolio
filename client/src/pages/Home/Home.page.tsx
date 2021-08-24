import React, {
    useEffect,
} from "react";
import AboutComponent from "./Components/About/AboutComponent";
import BannerComponent from "./Components/Banner/BannerComponent";
import FooterComponent from "./Components/Footer/FooterComponent";
import ProjectsComponent from "./Components/Projects/ProjectsComponent";
import ImageDowmload from "../../assets/images/project-item-1.png";

const HomePage =
    () => {
        useEffect(() => {
            const body =
                document.body;
            body.classList.add(
                "default_theme"
            );
        }, []);
        return (
            <div className="homepage_container">
                <BannerComponent />
                <AboutComponent />
                <ProjectsComponent />
                <FooterComponent />
            </div>
        );
    };

export default HomePage;
