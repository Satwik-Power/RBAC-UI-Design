import React, { useState } from 'react';
import {
  Typography,
  Button,
  TextField,
  Box,
  Grid,
  Modal,
  Checkbox,
  FormControlLabel,
  Avatar,
} from '@mui/material';
import { AddCircle, Delete, Edit, Update } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles'; // Import the theme hook

const RoleManagement = () => {
  const theme = useTheme(); // Use the current theme
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', description: 'Permissions: [Read, Write, Delete, Update]', active: true },
    { id: 2, name: 'User', description: 'Permissions: [Read Only]', active: true },
    { id: 3, name: 'Moderator', description: 'Permissions: [Read and Write Only]', active: false },
  ]);

  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', description: '', active: true });
  const [isEditMode, setIsEditMode] = useState(false);
  const [roleToEdit, setRoleToEdit] = useState(null);

  const handleAddRole = () => {
    if (!formData.name || !formData.description) {
      alert('Name and description are required');
      return;
    }

    const newRole = { ...formData, id: roles.length + 1 };
    setRoles([...roles, newRole]);
    handleCloseModal();
  };

  const handleEditRole = () => {
    if (!formData.name || !formData.description) {
      alert('Name and description are required');
      return;
    }

    const updatedRoles = roles.map(role => (role.id === roleToEdit.id ? { ...roleToEdit, ...formData } : role));
    setRoles(updatedRoles);
    handleCloseModal();
  };

  const handleOpenModal = () => {
    setOpenModal(true);
    setIsEditMode(false);
    setFormData({ name: '', description: '', active: true });
  };

  const handleEditModal = (role) => {
    setOpenModal(true);
    setIsEditMode(true);
    setRoleToEdit(role);
    setFormData({ name: role.name, description: role.description, active: role.active });
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setFormData({ name: '', description: '', active: true });
  };

  const handleDeleteRole = (roleId) => {
    setRoles(roles.filter(role => role.id !== roleId));
  };

  return (
    <div
      style={{
        backgroundColor: theme.palette.background.default, // Dynamically set background color
        color: theme.palette.text.primary, // Dynamically set text color
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'url(https://cdn.prod.website-files.com/65a5be30bf4809bb3a2e8aff/65dfa70ce4e48d5199b17990_understanding-kubernetes-rbac-components-.png)'
            : 'none', // Show image only in light mode
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        <b><u>Role Management</u></b>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenModal}
        startIcon={<AddCircle />}
      >
        <b>Add New Role</b>
      </Button>

      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        {roles.map(role => (
          <Grid item xs={12} sm={6} md={4} key={role.id}>
            <Box
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                padding: '16px',
                borderRadius: '8px',
                textAlign: 'center',
                backgroundColor: theme.palette.background.paper, // Theme-dependent box color
                color: theme.palette.text.primary,
              }}
            >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  marginBottom: 2,
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                }}
              >
                {role.name.charAt(0).toUpperCase()}
              </Avatar>
              <Typography variant="h6">{role.name}</Typography>
              <Typography variant="body2">{role.description}</Typography>
              <FormControlLabel control={<Checkbox checked={role.active} disabled />} label="Active" />
              <Box sx={{ marginTop: '10px' }}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleEditModal(role)}
                  startIcon={<Edit />}
                >
                  <b>Edit</b>
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleDeleteRole(role.id)}
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

      <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{ ...modalStyle, width: '400px' }}>
          <Typography variant="h6" gutterBottom>
            {isEditMode ? 'Edit Role' : 'Add New Role'}
          </Typography>
          <TextField
            label="Role Name"
            fullWidth
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            sx={{ marginBottom: '10px' }}
          />
          <TextField
            label="Description"
            fullWidth
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            sx={{ marginBottom: '10px' }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.active}
                onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
              />
            }
            label="Active"
          />
          <Box sx={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="outlined" onClick={handleCloseModal}>
              <b>Cancel</b>
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={isEditMode ? handleEditRole : handleAddRole}
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

// Modal style
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: 24,
};

export default RoleManagement;
