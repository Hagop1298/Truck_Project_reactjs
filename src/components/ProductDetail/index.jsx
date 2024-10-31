import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DATA from "../../Data";

const ProductDetails = () => {
  const { id } = useParams();
  const product = DATA.find((item) => item.id === parseInt(id));

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);

  const getThumbnailsPerPage = () => {
    return window.innerWidth < 768 ? 2 : 3;
  };

  const THUMBNAILS_PER_PAGE = getThumbnailsPerPage();

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleNext = () => {
    setActiveImageIndex((prevIndex) =>
        prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveImageIndex((prevIndex) =>
        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextThumbnail = () => {
    setThumbnailStartIndex((prevIndex) =>
        prevIndex + 1 >= product.images.length ? 0 : prevIndex + 1
    );
    setActiveImageIndex((prevIndex) =>
        prevIndex + 1 >= product.images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevThumbnail = () => {
    setThumbnailStartIndex((prevIndex) =>
        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
    setActiveImageIndex((prevIndex) =>
        prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const currentThumbnailIndex = activeImageIndex + 1;

  return (
      <div className="container mt-4 mb-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-4" style={{ height: "409px" }}>
              <img
                  src={product.images[activeImageIndex]}
                  alt="Product"
                  className="loading"
                  onLoad={(e) => e.target.classList.replace("loading", "loading-loaded")}
                  style={{
                    maxWidth: "653px",
                    maxHeight: "409px",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
              />
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <button
                  className="btn btn-outline-secondary me-2"
                  onClick={handlePrevThumbnail}
                  style={{ padding: "10px 15px" }}
              >
                &lt;
              </button>

              <div className="d-flex justify-content-center align-items-center">
                {product.images
                    .slice(
                        thumbnailStartIndex,
                        thumbnailStartIndex + THUMBNAILS_PER_PAGE
                    )
                    .map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            className="loading"
                            onLoad={(e) => e.target.classList.replace("loading", "loading-loaded")}
                            alt={`Thumbnail ${index + 1}`}
                            style={{
                              width: "87px",
                              height: "62px",
                              objectFit: "cover",
                              cursor: "pointer",
                              margin: "0 5px",
                              borderRadius: "8px",
                            }}
                            onClick={() =>
                                setActiveImageIndex(thumbnailStartIndex + index)
                            }
                        />
                    ))}

              </div>

              <span
                  className="btn btn-outline-secondary me-2"
                  onClick={handleNextThumbnail}
                  style={{ padding: "10px 15px" }}
              >
              &gt;
            </span>
              <span className="ms-2">{`${currentThumbnailIndex} / ${product.images.length}`}</span>
            </div>

            <div id="thumbnailCarousel" className="carousel slide mt-3">
              <button
                  className="carousel-control-prev"
                  type="button"
                  onClick={handlePrev}
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                  className="carousel-control-next"
                  type="button"
                  onClick={handleNext}
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-lg-6">
            <h2>{product.title}</h2>
            <p>
              {product.desc.split("\n").map((line, index) => (
                  <p key={index}>{line}</p>
              ))}
            </p>{" "}
            <ul className="list-unstyled">
              <li>
                <strong>Warranty:</strong> {product.warranty}
              </li>
              <li>
                <strong>Condition:</strong> {product.condition}
              </li>
            </ul>
            <h3>
              ${product.price} <small className="text-muted">Negotiable</small>
            </h3>
          </div>
        </div>
      </div>
  );
};

export default ProductDetails;
