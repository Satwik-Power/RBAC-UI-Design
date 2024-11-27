// src/pages/Profile.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Profile = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        textAlign: 'center',
      }}
    >
      <Typography variant="h5" gutterBottom>
        <b><u>My Profile</u></b>
      </Typography>
      
      
    </Box>
  );
};

export default Profile;
