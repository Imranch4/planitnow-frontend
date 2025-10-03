const axios = require('axios');

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:5000/api', // Updated to use 127.0.0.1 for compatibility
    timeout: 5000, // Increased timeout to handle slower responses
    headers: { 'Content-Type': 'application/json' }
});

module.exports = apiClient;

// Add a request interceptor to include the token
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('eventManagerToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  
  // Helper function to handle errors
  const handleError = (error) => {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      throw { error: 'No response from server' };
    } else {
      throw { error: error.message };
    }
  };

  // Auth API
  export const registerUser = async (userData) => {
    try {
        const response = await apiClient.post('/api/signup', {  // Updated endpoint
            firstName: userData.firstName,  // Ensure field names match backend
            lastName: userData.lastName,
            email: userData.email,
            phone: userData.phone,
            password: userData.password,
            userType: userData.userType
        });
        return response;
    } catch (error) {
        handleError(error);
    }
  };
  
  export const loginUser = async (credentials) => {
    try {
      const response = await apiClient.post('/auth/login', credentials);
      return response;
    } catch (error) {
      handleError(error);
    }
  };

  // Events API
  export const getEvents = async () => {
    try {
      const response = await apiClient.get('/events/');
      return response;
    } catch (error) {
      handleError(error);
    }
  };
  
  export const getEventDetails = async (id) => {
    try {
      const response = await apiClient.get(`/events/${id}`);
      return response;
    } catch (error) {
      handleError(error);
    }
  };

  export const createEvent = async (eventData) => {
    try {
      const response = await apiClient.post('/events/', eventData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response;
    } catch (error) {
      handleError(error);
    }
  };
  
  export const updateEvent = async (id, eventData) => {
    try {
      const response = await apiClient.put(`/events/${id}`, eventData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response;
    } catch (error) {
      handleError(error);
    }
  };

  export const deleteEvent = async (id) => {
    try {
      const response = await apiClient.delete(`/events/${id}`);
      return response;
    } catch (error) {
      handleError(error);
    }
  };
  
  export const registerForEvent = async (id) => {
    try {
      const response = await apiClient.post(`/events/${id}/register`);
      return response;
    } catch (error) {
      handleError(error);
    }
  };

  export const getMyEvents = async () => {
    try {
      const response = await apiClient.get('/events/my-events');
      return response;
    } catch (error) {
      handleError(error);
    }
  };

  export default apiClient;