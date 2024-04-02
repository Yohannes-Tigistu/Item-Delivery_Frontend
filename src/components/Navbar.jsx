import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Logo from './images/logo.png';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
 
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleSendItem = () => {
    // Navigate to the send item page
    navigate('../pages/SendItem');
  };


  const handleLogin = () => {
    // Navigate to the login page
    navigate('../pages/Login');
  };

  const pages = ['Drive & Deliver', 'Send an item'];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to='/'>
            <img src={Logo} alt="Logo" style={{ height: '40px' }} />
            </Link>
          </Typography>
         <Box sx={{ display: 'flex', marginLeft: 'auto' }}>
            {pages.map((page, index) => (
              <Button key={index} color="inherit" onClick={handleSendItem}>
                {page}
              </Button>
            ))}
          </Box>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>Profile</MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>My account</MenuItem>
          </Menu>
          <Button
            aria-controls="login-menu"
            aria-haspopup="true"
            variant="outlined"
            color="inherit"
            onClick={handleLogin}
            sx={{
              textTransform: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              background: 'none',
              border: '1px solid #fff',
              transition: 'background-color 0.3s ease',
              '&:hover': {
                backgroundColor: '#fff',
                color: '#27296d',
              },
            }}
          >
            Login
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
