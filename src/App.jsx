import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import {
  Navbar,
  Signin,
  Login,
  About,
  AllDetails,
  Home,
  Otpverification,
  Footer,
  ShopkeeperSignUp
} from "./components/allcomponents";
import Sidebar from "./components/ShopkeerData/ProductDAshboard/Sidebar";  

const PrivateOtpRoute = ({ otpverify }) => {
  return otpverify ? <Outlet /> : <Navigate replace to="/" />;
};

export default function App() {
  const [otpverify, setOtpVerify] = useState(true);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/Signin" element={<Signin setOtpVerify={setOtpVerify} />} />
        <Route path="/ShopkeeperSignUp" element={<ShopkeeperSignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login setOtpVerify={setOtpVerify} />} />
        <Route path="/About" element={<About />} />

        {/* Private Routes */}
        <Route element={<PrivateOtpRoute otpverify={otpverify} />}>
          <Route path="/Otpverification/:id" element={<Otpverification />} />
          <Route path="/ShopkeeperaddSpecs" element={<AllDetails />} />
          <Route path="/Viewdashboard" element={<Sidebar/>}/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
