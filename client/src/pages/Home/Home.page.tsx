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
                <a
                    href={
                        "https://images.unsplash.com/photo-1586480426351-84d7946d5e55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=8"
                    }
                    target="_blank"
                >
                    Download
                    Image
                </a>
            </div>
        );
    };

export default HomePage;
