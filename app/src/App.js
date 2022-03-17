import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
// import LoginUser from "./components/LoginUser";
// import CreateUser from "./components/CreateUser";
// import UserProfile from "./components/UserProfile";
import CreateHotel from "./components/Hotel/CreateHotel";
import ShowHotel from "./components/Hotel/ShowHotel";
// import UpdateHotel from "./components/Hotel/UpdateHotel";
// import ShowHotelbyId from "./components/Hotel/ShowHotelbyId";

function App() {
  useEffect(() => {}, 
  []);

  return (
    <>
      <Router>
        <Routes>
          {/* <Route exact path="/auth/login" element={<LoginUser />} />{" "}
          <Route path="/" element={<CreateUser />} />{" "}
          <Route path="/user/profile" element={<UserProfile />} />{" "}
          <Route path="/user/profile" element={<UserProfile />} />{" "} */}
          <Route path="/hotel/create" element={<CreateHotel />} />{" "}
          <Route path="/hotel/show" element={<ShowHotel />} />{" "}
          {/* <Route path="/hotel/update/:id" element={<UpdateHotel />} />{" "} */}
          {/* <Route path="/hotel/view/:id" element={<ShowHotelbyId />} />{" "} */}
        </Routes>{" "}
      </Router>{" "}
    </>
  );
}

export default App;
