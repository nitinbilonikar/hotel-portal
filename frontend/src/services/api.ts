import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';  // Update with your backend URL

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to all requests if available
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (email: string, password: string) => {
  return axiosInstance.post('/auth/login', { email, password });
};

export const register = (email: string, password: string) => {
    const jsonData = JSON.stringify({ email: email, password: password });
        
    //axiosInstance.post('/auth/register', jsonData)
    const response =  axiosInstance.post('/auth/register', jsonData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle success
      console.log('Response:', response);
  return response;//axiosInstance.post('/auth/register', { email, password });
};

export const getHotels = () => {
  return axiosInstance.get('/hotels');
};

export const bookHotel = (hotelId: number) => {
  return axiosInstance.post(`/hotels/book/${hotelId}`);
};
