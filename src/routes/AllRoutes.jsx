import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import SendItem from "../pages/SendItem";
import Footer from "../components/Footer";
import { Signup } from "../pages/Signup";
import About from "../pages/About";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/Home" element={<Home />} />
          <Route path="/pages/Login" element={<Login />} />
          <Route path="/pages/Signup" element={<Signup />} />
          <Route path="/pages/SendItem" element={<SendItem />} />
          <Route path="/pages/About" element={<About />} />
        </Routes>
        <Route path="/pages/Profile"  element={<Profile />} />
      </Routes>
    </div>
  );
};
