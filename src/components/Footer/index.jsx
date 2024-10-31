import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    const [isExtraSmallScreen, setIsExtraSmallScreen] = useState(window.innerWidth < 480);
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    useEffect(() => {
        const handleResize = () => {
            setIsExtraSmallScreen(window.innerWidth < 480);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
            <footer className="text-white"  style={{
                background: "#102540",
                padding: isExtraSmallScreen ? "10px" : "100px",
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb-4">
                            <img
                                src="/assets/logo/logo.jpg"
                                alt="JETIS"
                                className="mb-3 loading"
                                style={{ width: "80px" }}
                                onLoad={(e) => e.target.classList.replace("loading", "loading-loaded")}
                            />
                            <p className="text-white-50" style={{width: isExtraSmallScreen ? "95%" : "75%"}}>
                                JETIS is a leading automotive retail group specializing in
                                high-quality parts for trucks, vans, cars, plant machinery,
                                and forklifts. With branches across AustraliaAlbury, Sydney,
                                Brisbane, Beenleigh, Melbourne, Adelaide, Perthand Grass
                                Vallywe provide genuine parts to customers nationwide.
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6" >
                            <h5
                                className="text-white"
                                style={{
                                    borderBottom: "2px solid #FACC15",
                                    width: "105px",
                                    paddingBottom: "10px",
                                }}
                            >
                                Quick Links
                            </h5>
                            <div className="pt-4" style={{
                                color: "white",
                                fontWeight: "500",
                                fontSize: "18px",
                                display: "flex",
                                flexDirection: "column",
                            }}>
                                <NavLink to="/termsandconditions">Terms & Conditions</NavLink>
                                <NavLink to="/extendWarrantyService">Extend Warranty</NavLink>
                                <NavLink to="/about">About Us</NavLink>
                                <NavLink to="/contact">Contact Us</NavLink>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <h5
                                className="text-white"
                                style={{
                                    borderBottom: "2px solid #FACC15",
                                    width: "75px",
                                    paddingBottom: "10px",
                                    paddingTop: isSmallScreen ? '20px' : '0'
                                }}
                            >
                                Contact
                            </h5>
                            <ul className="list-unstyled pt-4" style={{
                                color: "white",
                                fontWeight: "500",
                                fontSize: "18px",
                            }}>
                                <li className="mb-2 d-flex justify-between align-items-center">
                                    <FaPhoneAlt className="me-2 text-red" />
                                    <a
                                        href="tel:0260759999"
                                        className="text-center text-semibold"
                                        style={{ color: "white", textDecoration: "none" }}
                                    >
                                        0260759999
                                    </a>
                                </li>
                                <li className="mb-2 d-flex justify-between align-items-center">
                                    <FaPhoneAlt className="me-2 text-red" />
                                    <a
                                        href="tel:0260759999"
                                        className="text-center text-semibold"
                                        style={{ color: "white", textDecoration: "none" }}
                                    >
                                        1300856555
                                    </a>
                                </li>
                                <li className="mb-2 d-flex justify-between align-items-center">
                                    <FaEnvelope className="me-2 text-red" />
                                    <a
                                        href="mailto:accounts@jetis.com.au"
                                        target="_blank"
                                        className="text-center text-semibold"
                                        style={{ color: "white", textDecoration: "none" }}
                                    >
                                        accounts@jetis.com.au
                                    </a>
                                </li>
                                <li className="mb-2 d-flex justify-between align-items-center">
                                    <FaEnvelope className="me-2 text-red" />
                                    <a
                                        href="mailto:accounts@jetis.com.au"
                                        target="_blank"
                                        className="text-center text-semibold"
                                        style={{ color: "white", textDecoration: "none" }}
                                    >
                                        sales@jetis.com.au
                                    </a>
                                </li>
                                <li className="mb-2 d-flex justify-between align-items-center" style={{ width: "max-content" }}>
                                    <FaMapMarkerAlt className="me-2 text-red" />
                                    <a
                                        href="https://www.google.com/maps?q=JETIS+Truck+Wreckers+Albury"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-center text-semibold"
                                        style={{
                                            textDecoration: "none",
                                            color: "white",
                                        }}
                                    >
                                        JETIS Truck Wreckers, Albury
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bg-danger py-2 w-100">
                <div style={{
                    width: isSmallScreen ? "100%" : "30%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <p className="m-0 text-light">Copyright © 2024 - JETIS</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
