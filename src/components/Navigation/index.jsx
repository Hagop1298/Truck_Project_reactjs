import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid w-75">
            <NavLink className="navbar-brand d-flex align-items-center" to="/">
              <img
                  style={{ width: '80px', height: '50px' }}
                  src="/assets/logo/logo.jpg"
                  alt="Logo"
                  className="loading"
                  onLoad={(e) => e.target.classList.replace("loading", "loading-loaded")}
              />
            </NavLink>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarSupportedContent"
            >
              <ul className="navbar-nav d-flex justify-content-end w-100 mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link fw-semibold" aria-current="page" to="/"
                           style={({isActive}) => ({
                             color: '#184374',
                             borderBottom: isActive ? '2px solid #FACC15' : 'none',
                           })}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fw-semibold" to="/products" style={({isActive}) => ({
                    color: '#184374',
                    borderBottom: isActive ? '2px solid #FACC15' : 'none',
                  })}>
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fw-semibold" to="/buyMyCar" style={({isActive}) => ({
                    color: '#184374',
                    borderBottom: isActive ? '2px solid #FACC15' : 'none',
                  })}>
                    Buy My Car
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fw-semibold" to="/warrantyClaimForm" style={({isActive}) => ({
                    color: '#184374',
                    borderBottom: isActive ? '2px solid #FACC15' : 'none',
                  })}>
                    Warranty
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fw-semibold" to="/about" style={({isActive}) => ({
                    color: '#184374',
                    borderBottom: isActive ? '2px solid #FACC15' : 'none',
                  })}>
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item fw-semibold">
                  <NavLink className="nav-link" to="/contact" style={({isActive}) => ({
                    color: '#184374',
                    borderBottom: isActive ? '2px solid #FACC15' : 'none',
                  })}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  );
};

export default Navigation;
