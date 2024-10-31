import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center" style={{width:"554px",height:"446px",paddingBottom:"10px"}}>
                        <img
                            src="/assets/logo/logo.jpg"
                            alt="About Us"
                            className="loading"
                            onLoad={(e) => e.target.classList.replace("loading", "loading-loaded")}
                            height="100%"
                            width="100%"
                        />
                    </div>
                    <div className="col-md-6">
                        <p
                            className="lead mb-4"
                            style={{
                                fontSize: "18px",
                                fontWeight: "400",
                                color: "#184374",
                            }}
                        >
                            JETIS is a leading automotive retail group specializing in high
                            - quality parts for trucks, vans, cars, plant machinery, and
                            forklifts. With branches across Australia Albury, Sydney,
                            Brisbane , Beenleigh , Melbourne, Adelaide , Perth and Grass
                            Vally we provide genuine parts to customers nationwide. As a
                            family - owned business, we prioritize strong customer
                            relationships and deliver exceptional service for both our
                            customers and staff. Whether you're looking for reliable parts
                            or dismantling services, JETIS has you covered!
                        </p>
                        <p
                            style={{
                                fontSize: "20px",
                                fontWeight: "500",
                                color: "#184374",
                            }}
                        >
                            We Sell Quality Used Parts for European, Japanese, and American
                            Vehicles
                        </p>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "400",
                                color: "#184374",
                            }}
                        >
                            At our locations across Australia Sydney, Brisbane, Melbourne,
                            Adelaide and Perth we specialize in high - quality second - hand
                            parts for trucks, plant machinery, and forklifts. We focus on
                            dismantling vehicles and have a vast range of trucks currently
                            available for wrecking from leading manufacturers, including:
                        </p>
                        <p
                            style={{
                                fontSize: "20px",
                                fontWeight: "500",
                                color: "#184374",
                            }}
                        >
                            Japanese Brands:
                        </p>
                        <ul>
                            <li
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    color: "#184374",
                                }}
                            >
                                Hino
                            </li>
                            <li
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    color: "#184374",
                                }}
                            >
                                Isuzu
                            </li>
                            <li
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    color: "#184374",
                                }}
                            >
                                Mitsubishi
                            </li>
                            <li
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    color: "#184374",
                                }}
                            >
                                Nissan
                            </li>
                        </ul>
                        <p
                            style={{
                                fontSize: "20px",
                                fontWeight: "500",
                                color: "#184374",
                            }}
                        >
                            European Brands:
                        </p>
                        <ul>
                            <li
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    color: "#184374",
                                }}
                            >
                                DAF
                            </li>
                            <li
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    color: "#184374",
                                }}
                            >
                                Iveco
                            </li>
                            <li
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    color: "#184374",
                                }}
                            >
                                Man
                            </li>
                            <li
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    color: "#184374",
                                }}
                            >
                                Mercedes-Benz
                            </li>
                            <li
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    color: "#184374",
                                }}
                            >
                                Scania
                            </li>
                            <li
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "400",
                                    color: "#184374",
                                }}
                            >
                                Volvo
                            </li>
                        </ul>
                        <p
                            style={{
                                fontSize: "18px",
                                fontWeight: "400",
                                color: "#184374",
                            }}
                        >
                            Whether you need reliable parts or are looking to dismantle a
                            vehicle, we have you covered. Reach out to us to find the parts
                            you need!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About
