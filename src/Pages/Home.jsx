import React from "react";
import Product from "./Product";
import Carousel from "../components/Carousel";
import FilterTrucks from "../components/FilterTruks";
import {NavLink} from "react-router-dom";
import HomeProducts from "../components/HomeProducts";
// import Footer from "./Footer";

const Home = () => {
    return (
        <div>
            <Carousel/>
            <div style={{backgroundColor:"#F9FAFB",padding:"50px"}}>
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
        </div>
    );
};

export default Home;
