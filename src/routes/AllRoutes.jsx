import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Home } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
     
       <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
      
    </div>
  );
};
