import React, {useEffect} from "react";
import AboutComponent from "./Components/About/AboutComponent";
import BannerComponent from "./Components/Banner/BannerComponent";

const HomePage = () => {

    useEffect(()=>{
        const body = document.body;
        body.classList.add("default_theme")
    },[])
    return (
        <div className="homepage_container">
            <BannerComponent />
            <AboutComponent />
        </div>
    );
};

export default HomePage;
