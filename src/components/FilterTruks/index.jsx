import React from 'react';
import { useNavigate } from 'react-router-dom';

const FilterTrucks = () => {
    const brands = [
        { name: 'Hino', img: '/assets/brands/hino.png' },
        { name: 'Isuzu', img: '/assets/brands/isuzu.png' },
        { name: 'Mitsubishi', img: '/assets/brands/mitsubishi.png' },
        { name: 'Nissan', img: '/assets/brands/nissan.png' },
        { name: 'DAF', img: '/assets/brands/daf.png' },
    ];
    const brands2 = [
        { name: 'Iveco', img: '/assets/brands/iveco.png' },
        { name: 'Man', img: '/assets/brands/man.png' },
        { name: 'Mercedes', img: '/assets/brands/mercedesbenz.png' },
        { name: 'Scania', img: '/assets/brands/scania.png' },
        { name: 'Volvo', img: '/assets/brands/volvo.png' },
    ];

    const navigate = useNavigate();

    const handleBrandClick = (brand) => {
        navigate(`/products?brand=${brand.toLowerCase()}`);
    };

    return (
        <div className="mb-4 container mt-5">
            <p style={{ color: "#184374", fontSize: "40px", fontWeight: "700", textAlign: "center" }}>
                Browse by Brand
            </p>

            <div className="mb-5">
                <p style={{ color: "#184374", fontSize: "20px", fontWeight: "600", textAlign: "center" }}>
                    Japanese Brands:
                </p>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
                    {brands.map((brand) => (
                        <div
                            key={brand.name}
                            className="col"
                            onClick={() => handleBrandClick(brand.name)}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="card h-100">
                                <img
                                    src={brand.img}
                                    className="card-img-top loading"
                                    alt={brand.name}
                                    style={{ width: "80px", height: "80px", margin: "auto" }}
                                    onLoad={(e) => e.target.classList.replace("loading", "loading-loaded")}
                                />
                                <div className="card-body text-center">
                                    <p className="card-title" style={{ color: "#184374", fontWeight: "700", fontSize: "18px" }}>
                                        {brand.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mb-5">
                <p style={{ color: "#184374", fontSize: "20px", fontWeight: "600", textAlign: "center" }}>
                    European Brands:
                </p>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
                    {brands2.map((brand) => (
                        <div
                            key={brand.name}
                            className="col"
                            onClick={() => handleBrandClick(brand.name)}
                            style={{ cursor: "pointer" }}
                        >
                            <div className="card h-100">
                                <img
                                    src={brand.img}
                                    className="card-img-top loading"
                                    alt={brand.name}
                                    style={{ width: "80px", height: "80px", margin: "auto" }}
                                    onLoad={(e) => e.target.classList.replace("loading", "loading-loaded")}
                                />
                                <div className="card-body text-center">
                                    <p className="card-title" style={{ color: "#184374", fontWeight: "700", fontSize: "18px" }}>
                                        {brand.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilterTrucks;
