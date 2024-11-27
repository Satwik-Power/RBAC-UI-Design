import axios from 'axios';

export const getUsers = async () => {
  return await axios.get('/api/users'); // Simulated API endpoint
};

export const addUser = async (user) => {
  return await axios.post('/api/users', user);
};
