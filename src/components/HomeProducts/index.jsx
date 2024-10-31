import React, { useState, useEffect } from "react";
import DATA from "../../Data";
import ProductCard from "../ProductCard";

const HomeProducts = () => {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        selectRandomProducts();
    }, []);

    const selectRandomProducts = () => {
        const shuffledData = DATA.sort(() => 0.5 - Math.random());

        const uniqueBrands = new Set();
        const selectedProducts = [];

        for (const item of shuffledData) {
            if (!uniqueBrands.has(item.brand)) {
                uniqueBrands.add(item.brand);
                selectedProducts.push(item);
            }
            if (selectedProducts.length === 6) {
                break;
            }
        }

        setFilteredData(selectedProducts);
    };

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center" style={{color: "#184671", fontWeight: "700", fontSize: "40px"}}>
                        <p>Products</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => <ProductCard key={item.id} item={item} />)
                    ) : (
                        <p>No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;
