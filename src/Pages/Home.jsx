import React, {useState} from "react";
import Carousel from "../components/Carousel";
import FilterTrucks from "../components/FilterTruks";
import {NavLink} from "react-router-dom";
import HomeProducts from "../components/HomeProducts";

const Home = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [isScriptLoaded, setIsScriptLoaded] = useState(false);
    console.log(isScriptLoaded)
    const handleTextUsClick = () => {
        if (!isScriptLoaded) {
            const script = document.createElement("script");
            script.src = "https://connect.podium.com/widget.js#ORG_TOKEN=22f3511a-5fcc-4fe2-9374-423b1d8ab8c5";
            script.defer = true;
            script.id = "podium-widget";
            script.setAttribute("data-organization-api-token", "22f3511a-5fcc-4fe2-9374-423b1d8ab8c5");
            script.onload = () => {
                console.log(123)
                setIsScriptLoaded(true);
                window.PodiumWebChat && window.PodiumWebChat.open();
            };
            document.body.appendChild(script);
        } else {
            console.log(456)
            window.PodiumWebChat && window.PodiumWebChat.open();
            window.open("https://www.podium.com/product/webchat/", "_blank");
        }
        // window.open("https://www.podium.com/product/webchat/", "_blank");
    };


    return (
        <div>
            <Carousel/>
            <div style={{backgroundColor: "#F9FAFB", padding: "50px"}}>
                <HomeProducts/>
                <div className="container d-flex justify-content-center mt-4">
                    <NavLink to="/products">
                        <button style={{background: "#DB282B", color: "white"}} className="btn btn-md">
                            See All
                        </button>
                    </NavLink>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <FilterTrucks/>
            </div>
            <div
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    zIndex: 1000,
                }}
                onMouseEnter={() => setShowMessage(true)}
                onMouseLeave={() => setShowMessage(false)}
            >
                <button
                    onClick={handleTextUsClick}
                    style={{
                        background: "rgb(219, 40, 43)",
                        color: "white",
                        padding: "10px 20px",
                        borderRadius: "20px",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Text us
                </button>
            </div>
            {showMessage && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "70px",
                        right: "20px",
                        width: "200px",
                        padding: "15px",
                        backgroundColor: "white",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                >
                    <img
                        src="/assets/logo/textUsAvatarImage.png"
                        alt="Profile"
                        style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            marginRight: "10px",
                        }}
                    />
                    <p style={{margin: 0, fontSize: "14px"}}>
                        Hi there, have a question? Text us here.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Home;


