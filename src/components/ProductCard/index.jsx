import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ item }) => {
    return (
        <div
            key={item.id}
            className="card p-0 my-3"
            style={{ width: "358px", borderRadius: "15px", overflow: "hidden", position: "relative" }} // Set position relative for absolute positioning of brand label
        >
            <NavLink to={`/products/${item.id}`} style={{ textDecoration: "none" }}>
                <img
                    src={item.img}
                    className="card-img-top loading"
                    alt={item.title}
                    style={{ height: "200px", objectFit: "cover" }}
                    onLoad={(e) => e.target.classList.replace("loading", "loading-loaded")}
                />
                <div className="card-body" style={{ borderBottom: "1px solid #E5E7EB" }}>
                    <h5
                        className="card-title"
                        style={{
                            fontSize: "20px",
                            fontWeight: "700",
                            color: "#184374",
                            textAlign: "left",
                        }}
                    >
                        {item.title}
                    </h5>
                    <ul style={{ textAlign: "start" }}>
                        <li
                            style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#184374",
                                textAlign: "left",
                            }}
                        >
                            Warranty: {item.warranty}
                        </li>
                        <li
                            style={{
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#184374",
                                textAlign: "left",
                            }}
                        >
                            Condition: {item.condition}
                        </li>
                    </ul>
                </div>
            </NavLink>

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
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginTop: "5px",
                    padding:"10px"
                }}
            >
                <p
                    className="lead"
                    style={{ fontSize: "24px", color: "#184374", fontWeight: "700", textAlign: "left" }}
                >
                    ${item.price}
                    <span style={{ paddingLeft: "8px", color: "#6B7280", fontSize: "14px" }}>Negotiable</span>
                </p>
                <NavLink to={`/products/${item.id}`}>
                    <p>Learn More</p>
                </NavLink>
            </div>
        </div>
    );
};

export default ProductCard;
