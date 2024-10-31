import React from 'react';

const Carousel = () => {
    return (

            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                    ></button>
                </div>

                <div className="carousel-inner" style={{height: "519px"}}>
                    <div className="carousel-item active position-relative">
                        <img
                            src="/assets/trucks/carousel/truck-3.jpg"
                            className="d-block w-100 loading"
                            alt="Truck 1"
                            style={{height: "519px", objectFit: "cover"}}
                            onLoad={(e) => e.target.classList.replace("loading", "loading-loaded")}
                        />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100"
                            style={{
                                backgroundColor: "rgba(25, 77, 136, 0.6)",
                            }}
                        ></div>
                        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                            <h2>Engine Parts</h2>
                            <p>High-performance engine components for long-lasting durability.</p>
                        </div>
                    </div>

                    <div className="carousel-item position-relative">
                    <img
                            src="/assets/trucks/carousel/truck-2.jpg"
                            className="d-block w-100 loading"
                            alt="Truck 2"
                            style={{height: "519px", objectFit: "cover"}}
                            onLoad={(e) => e.target.classList.replace("loading", "loading-loaded")}
                        />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100"
                            style={{
                                backgroundColor: "rgba(25, 77, 136, 0.6)",
                            }}
                        ></div>
                        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                            <h2>Tires and Wheels</h2>
                            <p>Top quality tires and wheels for any road condition.</p>
                        </div>
                    </div>

                    <div className="carousel-item position-relative">
                        <img
                            src="/assets/trucks/carousel/truck-1.jpg"
                            className="d-block w-100 loading"
                            alt="Truck 3"
                            style={{height: "519px", objectFit: "cover"}}
                            onLoad={(e) => e.target.classList.replace("loading", "loading-loaded")}
                        />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100"
                            style={{
                                backgroundColor: "rgba(25, 77, 136, 0.6)",
                            }}
                        ></div>
                        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                            <h2>Brakes and Suspension</h2>
                            <p>Reliable brake systems and suspension for safety and control.</p>
                        </div>
                    </div>

                    <div className="carousel-item position-relative">
                    <img
                            src="/assets/trucks/carousel/truck-4.jpg"
                            className="d-block w-100 loading"
                            alt="Truck 4"
                            style={{height: "519px", objectFit: "cover"}}
                            onLoad={(e) => e.target.classList.replace("loading", "loading-loaded")}
                        />
                        <div
                            className="position-absolute top-0 start-0 w-100 h-100"
                            style={{
                                backgroundColor: "rgba(25, 77, 136, 0.6)",
                            }}
                        ></div>
                        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
                            <h2>Lighting and Electronics</h2>
                            <p>High-intensity lighting and electronic systems for enhanced visibility.</p>
                        </div>
                    </div>
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

    );
};

export default Carousel;