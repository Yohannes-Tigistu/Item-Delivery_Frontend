import { useState } from 'react';
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import  Login  from './pages/Login';

import Footer from './components/Footer';
import  Signup from './pages/Auth/SignUp';
import About from './pages/About';
import Details from './pages/Details';
import Profile from './pages/Profile';
import Drive from './pages/Drive'
import OrderForm from './pages/OrderForm';
import DriverSignup from './pages/DriverSignup';
import Posts from './pages/Posts';
import  Payment  from './pages/Payment';
// import ProfileSetupPage from './pages/ProfileSetupPage';
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#27296d', 
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/Home" element={<Home />} />
          <Route path="/pages/Login" element={<Login />} />
          <Route path="/pages/SignUp" element={<Signup />} />
          <Route path="/pages/Posts" element={<Posts />} />
          <Route path="/pages/About" element={<About />} />
          <Route path="/pages/Profile" element={<Profile />} />
          <Route path="/pages/Details" element={<Details />} />
          <Route path="/pages/OrderForm" element={<OrderForm />} />
          <Route path="/pages/Drive" element={<Drive />} />
          <Route path="/pages/DriverSignup" element={<DriverSignup />} />
          <Route path="/pages/OrderForm" element={<OrderForm />} />
          <Route path="/pages/Payment" element={<Payment />} />
          {/* <Route path="/pages/ProfileSetupPage" element={<ProfileSetupPage/>} /> */}
        </Routes>
        <Footer />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
