import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001', // Replace with your backend server URL
});

export const createPlan = () => {
  return instance.post('/create-plan');
};
export const createSubs = () => {
  return instance.post('/create-subscription');
};
