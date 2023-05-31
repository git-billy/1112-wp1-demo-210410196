import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home_96 from "./pages/Home_96";
import About_96 from "./pages/About_96";
import SingleCocktail_96 from "./pages/SingleCocktail_96";
import Error_96 from "./pages/Error_96";
// import components
import Navbar_96 from "./components/Navbar_96";
function App_96() {
  return (
    <Router>
      <Navbar_96 />
      <Routes>
        <Route exact path="/" element={<Home_96 />} />
        <Route path="/singlecocktail_96/:id" element={<SingleCocktail_96 />} />
      </Routes>
    </Router>
  );
}

export default App_96;
