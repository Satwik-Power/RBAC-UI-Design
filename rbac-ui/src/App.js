import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Tooltip,
  CssBaseline,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { DarkMode, LightMode, AccountCircle } from '@mui/icons-material'; // Import AccountCircle icon
import UserManagement from './pages/UserManagement';
import RoleManagement from './pages/RoleManagement';
import Profile from './pages/Profile';
import './App.css';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      {/* Welcome Message */}
      <Typography variant="h4" gutterBottom>
        <b><u>Welcome to the RBAC Dashboard</u></b>
      </Typography>
      <Typography variant="h5" gutterBottom>
        <b><u>Manage Users, Roles, and Permissions</u></b>
      </Typography>

      {/* Images Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          width: '80%',
          height: '400px', // Fixed height for the image container
          marginTop: '20px',
          gap: '10px', // Add spacing between images
        }}
      >
        {/* Left Side Image */}
        <Box
          component="img"
          src="https://elearn.nptel.ac.in/wp-content/uploads/2024/07/Role-Based-Access-Control.jpg"
          sx={{
            flex: 1,
            height: '100%', // Full height for the left image
            borderRadius: '8px',
            objectFit: 'cover',
          }}
        />

        {/* Right Side Images */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px', // Small gap between the two right-side images
          }}
        >
          <Box
            component="img"
            src="https://www.coresecurity.com/sites/default/files/2020-10/cs-privileged-access-management-lock-700x350.png"
            sx={{
              height: '50%',
              width: '100%',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
          <Box
            component="img"
            src="https://bettercloud.b-cdn.net/wp-content/uploads/2021/07/RoleBasedAccessControl_FeatureImage.jpg"
            sx={{
              height: '50%',
              width: '100%',
              borderRadius: '8px',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // You could store the users in state to access them throughout the app
  const users = [
    { id: 1, name: 'Satwik', email: 'satwik@gmail.com', status: true, role: 'Admin', profileImage: 'https://www.example.com/profile1.jpg' },
    { id: 2, name: 'Puneeth Rajkumar', email: 'puneeth@power.com', status: false, role: 'User', profileImage: 'https://www.example.com/profile2.jpg' },
  ];

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ flexGrow: 1 }}>
          {/* AppBar for Navigation */}
          <AppBar position="static">
            <Toolbar>
              

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <h2><b><u>RBAC Dashboard</u></b></h2>
              </Typography>

              {/* Home Button */}
              <Button color="inherit" component={Link} to="/">
                <b><u>Home</u></b>
              </Button>

              <Button color="inherit" component={Link} to="/user-management">
                <b><u>User Management</u></b>
              </Button>
              <Button color="inherit" component={Link} to="/role-management">
                <b><u>Role Management</u></b>
              </Button>

              {/* Profile Button with AccountCircle Icon */}
              <Tooltip title="My Profile">
                <IconButton color="inherit" component={Link} to="/profile" state={{ users }}>
                  <AccountCircle />
                  <h6><u>My Profile</u></h6>
                </IconButton>
              </Tooltip>

              <Tooltip title="Toggle Dark Mode">
                <IconButton color="inherit" onClick={toggleDarkMode}>
                  {darkMode ? <LightMode /> : <DarkMode />}
                </IconButton>
              </Tooltip>
            </Toolbar>
          </AppBar>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/user-management" element={<UserManagement users={users} />} />
            <Route path="/role-management" element={<RoleManagement users={users} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
