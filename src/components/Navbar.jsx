import * as React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
const drawerWidth = 250;
const navItems = ["Home", "Posts", "About", "Contact" ];


function Navbar(props) {
  const navigate= useNavigate()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
   
  const loginhandler=()=>{
    navigate("pages/Login")
  }
  const Abouthandler = () => {
    navigate("pages/About");
  };const Homehandler = () => {
    navigate("pages/Home");
  };const Postshandler = () => {
    navigate("pages/Posts");
  };
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, ml: 5 }}>
       <img src="" alt="logo" />
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Home"} onClick={Homehandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Posts"} onClick={Postshandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"About"} onClick={Abouthandler} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
          
            <ListItemText primary={"Login"} onClick={loginhandler} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", marginBottom: "100px" }}>
      <AppBar component="nav" color="default">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: "block" } }}
          >
            <img src="" alt="logo" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" }, mx: 2 }}>
            <Button onClick={Homehandler} sx={{ color: "#CC2936", mx: 1 }}>
              Home
            </Button>
            <Button onClick={Postshandler} sx={{ color: "#CC2936", mx: 1 }}>
              Posts
            </Button>
            <Button onClick={Abouthandler} sx={{ color: "#CC2936", mx: 1 }}>
              About
            </Button>
            <Button
              variant="outlined"
              onClick={loginhandler}
              sx={{ color: "#CC2936" }}
            >
              Login
            </Button>
            <Link to={"/pages/Profile"}>
              <PersonIcon />
            </Link>
          </Box>{" "}
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: "#CC2936" }}
          >
            <MenuIcon color="#CC2936" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer // mobile resposiveness
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: {},
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}


export default Navbar;
