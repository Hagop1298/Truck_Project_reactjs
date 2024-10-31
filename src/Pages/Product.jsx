import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DATA from "../Data";

const Products = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const queryBrand = queryParams.get('brand');
    const [isExtraSmallScreen, setIsExtraSmallScreen] = useState(window.innerWidth < 765);
    const [selectedBrand, setSelectedBrand] = useState(queryBrand || "All");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    useEffect(() => {
        const handleResize = () => {
            setIsExtraSmallScreen(window.innerWidth < 765);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (queryBrand) {
            setSelectedBrand(queryBrand);
        }
    }, [queryBrand]);

    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
        setCurrentPage(1);
    };

    const filteredProducts = selectedBrand === "All"
        ? DATA
        : DATA.filter((item) => item.brand.toLowerCase() === selectedBrand.toLowerCase());

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const cardItem = (item) => (
        <div
            key={item.id}
            className="card p-0 my-3 position-relative shadow"
            style={{width: "358px", borderRadius: "15px", overflow: "hidden"}}
        >
            <NavLink to={`/products/${item.id}`} style={{textDecoration: "none"}}>
                <img src={item.img} className="card-img-top loading" alt={item.title}
                     style={{height: "200px", objectFit: "cover"}}
                     onLoad={(e) => e.target.classList.replace("loading", "loading-loaded")}/>
                <div className="card-body" style={{borderBottom: "1px solid #E5E7EB"}}>
                    <h5 className="card-title" style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#184374",
                        textAlign: "left"
                    }}>{item.title}</h5>
                    <ul style={{textAlign: "start"}}>
                        <li style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#184374",
                            textAlign: "left"
                        }}>Warranty: {item.warranty}</li>
                        <li style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#184374",
                            textAlign: "left"
                        }}>Condition: {item.condition}</li>
                    </ul>
                    <div
                        style={{
                            backgroundColor: "#FACC15",
                            padding: "5px 10px",
                            position: "absolute",
                            top: "10px",
                            left: "-2px",
                            borderRadius: "5px",
                            fontWeight: "bold",
                            color: "#000",
                        }}
                    >
                        {item.brand}
                    </div>
                </div>
            </NavLink>
            <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginTop: "5px",
                padding:"10px"
            }}>
                <p className="lead"
                   style={{fontSize: "24px", color: "#184374", fontWeight: "700", textAlign: "left"}}>${item.price}
                    <span style={{paddingLeft: "8px", color: "#6B7280", fontSize: "14px"}}>Negotiable</span>
                </p>
            </div>
        </div>
    );

    const brands = ["All", ...new Set(DATA.map(item => item.brand))];

    const handlePageChange = (direction) => {
        if (direction === 'next' && currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
        if (direction === 'prev' && currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <div className="container mb-4">
            <div className="container py-5">
                <div className="row mb-4 w-100 align-items-center">
                    <div className="col-12  col-md-6 text-center d-flex text-md-start"
                         style={{width : isExtraSmallScreen ? "100%" : "60%", justifyContent : isExtraSmallScreen ? "center" : "flex-end"}}>

                        <h1 style={{color: "#184671", fontWeight: "700", fontSize: "40px"
                        }}>
                            Products
                        </h1>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-md-end mt-3 mt-md-0"
                         style={{width : isExtraSmallScreen ? "100%" : "40%", justifyContent : isExtraSmallScreen ? "center" : "flex-end"}}>
                        <select className="form-select w-auto" value={selectedBrand} onChange={handleBrandChange}>
                            <option>Choose brand</option>
                            {brands.map((brand) => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="row justify-content-around">
                {currentProducts.length > 0 ? (
                    currentProducts.map(cardItem)
                ) : (
                    <p className="text-center text-red">No products found for the selected brand.</p>
                )}
            </div>
            <div className="d-flex justify-content-center align-items-center mt-4">
                <button
                    className="btn btn-primary me-2"
                    style={{backgroundColor: "#184374", color: "white"}}
                    onClick={() => handlePageChange('prev')}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span style={{fontSize: "18px", fontWeight: "bold"}}>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    className="btn btn-primary ms-2"
                    style={{backgroundColor: "#184374", color: "white"}}
                    onClick={() => handlePageChange('next')}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Products;
