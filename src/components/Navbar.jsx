// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import { Link } from "react-router-dom";
// //import logo from "../assets/logo.png";

// const Navbar = () => (
//   <AppBar position="static">
//     <Toolbar>
//       {/* <img src={logo} alt="logo" width="40" style={{ marginRight: 10 }} /> */}
//       <Typography variant="h6" sx={{ flexGrow: 1 }}>
//         Student Portal
//       </Typography>

//       <Button color="inherit" component={Link} to="/login">
//         Login
//       </Button>
//       <Button color="inherit" component={Link} to="/register">
//         Register
//       </Button>
//     </Toolbar>
//   </AppBar>
// );

// export default Navbar;
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
//import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, token, logout } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    // handleClose();
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Side Logo */}
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          {/* <img src={logo} alt="Logo" width="40" /> */}
          <Typography variant="h6" sx={{ ml: 2 }}>
            Student Portal
          </Typography>
        </Box>

        {/* Right Side */}
        {!token ? (
          <Box>
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => navigate("/register")}>
              Register
            </Button>
          </Box>
        ) : (
          <Box>
            <Button
              color="inherit"
              onClick={handleProfileClick}
              startIcon={<Avatar>{user?.name?.charAt(0)}</Avatar>}
            >
              {user?.name}
            </Button>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem disabled>
                <Typography variant="body2">{user?.email}</Typography>
              </MenuItem>

              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
