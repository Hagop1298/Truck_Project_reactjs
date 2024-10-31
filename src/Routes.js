import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import ProductDetail from './components/ProductDetail';
import AllProducts from './Pages/Product';
import TermsAndConditions from './components/TermsAndConditions';
import BuyMyCar from './Pages/BuyMyCar';
import WarrantyClaimForm from './Pages/WarrantyClaimForm';
import Contact from './Pages/Contact';
import ExtendWarrantyService from "./components/ExtendedWarrantyService";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/warrantyClaimForm" element={<WarrantyClaimForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/termsandconditions" element={<TermsAndConditions />} />
            <Route path="/buymycar" element={<BuyMyCar />} />
            <Route path="/extendWarrantyService" element={ <ExtendWarrantyService/>} />
            <Route path="*" element={<Navigate to="/" />} />

        </Routes>
    );
};

export default AppRoutes;
