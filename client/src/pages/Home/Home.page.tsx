import React, {useEffect} from "react";
import BannerComponent from "./Components/Banner/BannerComponent";

const HomePage = () => {

    useEffect(()=>{
        const body = document.body;
        body.classList.add("default_theme")
    },[])
    return (
        <div className="homepage_container">
            <BannerComponent />
        </div>
    );
};

export default HomePage;
