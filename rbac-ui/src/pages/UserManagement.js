import React, { useState } from 'react';
import {
  Typography,
  Button,
  TextField,
  Box,
  Grid,
  Modal,
  FormControlLabel,
  Checkbox,
  Avatar,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  useTheme,
} from '@mui/material';
import { AddCircle, Delete, Edit, Update } from '@mui/icons-material';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Satwik', email: 'satwik@gmail.com', status: true, role: 'Admin', profileImage: 'https://www.example.com/profile1.jpg' },
    { id: 2, name: 'Puneeth Rajkumar', email: 'puneeth@power.com', status: false, role: 'User', profileImage: 'https://www.example.com/profile2.jpg' },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', status: true, role: '' });
  const [isEditMode, setIsEditMode] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  const roles = ['Admin', 'User', 'Moderator'];
  const theme = useTheme();

  // Function to validate email
  const validateEmail = (email) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailRegex.test(email.toLowerCase());
  };

  // Function to validate name
  const validateName = (name) => {
    return name.trim().length > 0;  // Ensures the name is not empty
  };

  const handleAddUser = () => {
    if (!formData.name || !formData.email || !formData.role) {
      alert('Name, email, and role are required');
      return;
    }

    if (!validateName(formData.name)) {
      alert('Please enter a valid name');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    const newUser = { ...formData, id: users.length + 1, profileImage: 'https://www.example.com/default.jpg' };
    setUsers([...users, newUser]);
    handleCloseModal();
  };

  const handleEditUser = () => {
    if (!formData.name || !formData.email || !formData.role) {
      alert('Name, email, and role are required');
      return;
    }

    if (!validateName(formData.name)) {
      alert('Please enter a valid name');
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    const updatedUsers = users.map(user =>
      user.id === userToEdit.id ? { ...userToEdit, ...formData } : user
    );
    setUsers(updatedUsers);
    handleCloseModal();
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    setIsEditMode(false);
    setFormData({ name: '', email: '', status: true, role: '' });
  };

  const handleEditModal = user => {
    setOpenModal(true);
    setIsEditMode(true);
    setUserToEdit(user);
    setFormData({ name: user.name, email: user.email, status: user.status, role: user.role });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setFormData({ name: '', email: '', status: true, role: '' });
  };

  const handleDeleteUser = userId => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <div
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '100vh',
        padding: '20px',
        backgroundImage: 'url(https://cdn.prod.website-files.com/65a5be30bf4809bb3a2e8aff/65dfa70ce4e48d5199b17990_understanding-kubernetes-rbac-components-.png)', // Add your image URL here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        <b><u>User Management</u></b>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenModal}
        startIcon={<AddCircle />}
      >
        <b>Add New User</b>
      </Button>

      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        {users.map(user => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <Box
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                padding: '16px',
                borderRadius: '8px',
                textAlign: 'center',
                backgroundColor: theme.palette.background.paper,
              }}
            >
              <Avatar
                src={user.profileImage}
                alt={user.name}
                sx={{
                  width: 80,
                  height: 80,
                  marginBottom: 2,
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="body2">{user.email}</Typography>
              <Typography variant="body2">Role: {user.role}</Typography>
              <FormControlLabel
                control={<Checkbox checked={user.status} disabled />}
                label="Active"
              />
              <Box sx={{ marginTop: '10px' }}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleEditModal(user)}
                  startIcon={<Edit />}
                >
                  <b>Edit</b>
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDeleteUser(user.id)}
                  sx={{ marginLeft: '10px' }}
                  startIcon={<Delete />}
                >
                  <b>Delete</b>
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ ...modalStyle, backgroundColor: theme.palette.background.paper }}>
          <Typography variant="h6" gutterBottom>
            {isEditMode ? 'Edit User' : 'Add New User'}
          </Typography>
          <TextField
            label="Name"
            fullWidth
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            sx={{ marginBottom: '10px' }}
          />
          <TextField
            label="Email"
            fullWidth
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            sx={{ marginBottom: '10px' }}
          />
          <FormControl fullWidth sx={{ marginBottom: '10px' }}>
            <InputLabel>Role</InputLabel>
            <Select
              label="Role"
              value={formData.role}
              onChange={e => setFormData({ ...formData, role: e.target.value })}
            >
              {roles.map(role => (
                <MenuItem key={role} value={role}>
                  {role}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.status}
                onChange={e => setFormData({ ...formData, status: e.target.checked })}
              />
            }
            label="Active"
          />
          <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="outlined" onClick={handleCloseModal}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={isEditMode ? handleEditUser : handleAddUser}
              startIcon={<Update />}
            >
              {isEditMode ? 'Update' : 'Add'}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: 24,
};

export default UserManagement;
