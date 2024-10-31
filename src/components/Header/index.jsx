import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Box } from '@chakra-ui/react';
import Navigation from "../Navigation";

const Header = () => {
  return (
      <>
        <header
            className="py-3 border-bottom"
            style={{ backgroundColor: "#184374", color: "white" }}
        >
          <div className="container-fluid d-flex flex-column align-items-center">
            <div
                className="row align-items-center justify-content-between"
                style={{ width: "85%", marginLeft: "8%" }}
            >
              <div className="col-md-6 col-12 d-flex flex-column justify-content-start align-items-start mb-3 mb-md-0">
                <Box display="flex" justifyContent="space-between" flexDirection="row">
                  <FaPhoneAlt className="me-2 text-red" />
                  <a
                      href="tel:0260759999"
                      className="text-center text-semibold"
                      style={{ color: "white", textDecoration: "none" }}
                  >
                    0260759999
                  </a>
                </Box>
                <Box display="flex" justifyContent="space-between" flexDirection="row">
                  <FaPhoneAlt className="me-2 text-red" />
                  <a
                      href="tel:0260759999"
                      className="text-center text-semibold"
                      style={{ color: "white", textDecoration: "none" }}
                  >
                    1300856555
                  </a>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection="row">
                  <span className="text-center" style={{ fontSize: "14px", fontWeight: "700" }}>
                    ABN: 57 075 050 118
                  </span>
                </Box>
              </div>

              <div className="col-md-6 col-12 d-flex flex-column align-items-start justify-content-start">
                <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection="row">
                  <FaMapMarkerAlt className="me-2 text-red" />
                  <a
                      href="https://www.google.com/maps?q=JETIS+Truck+Wreckers+Albury"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-semibold"
                      style={{ textDecoration: "none", color: "white" }}
                  >
                    JETIS Truck Wreckers, Albury
                  </a>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection="row">
                  <FaEnvelope className="me-2 text-red" />
                  <a
                      href="mailto:accounts@jetis.com.au"
                      target="_blank"
                      className="text-center text-semibold"
                      style={{ color: "white", textDecoration: "none" }}
                  >
                    accounts@jetis.com.au
                  </a>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection="row">
                  <FaEnvelope className="me-2 text-red" />
                  <a
                      href="mailto:sales@jetis.com.au"
                      target="_blank"
                      className="text-center text-semibold"
                      style={{ color: "white", textDecoration: "none" }}
                  >
                    sales@jetis.com.au
                  </a>
                </Box>
              </div>
            </div>
          </div>
        </header>
        <Navigation />
      </>
  );
};

export default Header;
