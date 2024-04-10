import { useState } from 'react';
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import  Login  from './pages/Login';
import SendItem from './pages/SendItem';
import Footer from './components/Footer';
import About from './pages/About';
import { Posts } from './pages/Posts';
import SignUp from './pages/Auth/SignUp';

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
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pages/Home' element={<Home />} />
          <Route path='/pages/Login' element={<Login />} />
          <Route path='/pages/SendItem' element={<SendItem />} />
          <Route path='/pages/About'element={<About/>}/>
          <Route path='/posts'element={<Posts/>}/>
          <Route path='/signup'element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
