import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer '+ import.meta.env.VITE_API_TMDB_TOKEN
  },

});

apiClient.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  
  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        // handle unauthorized error (e.g., redirect to login)
      }
      return Promise.reject(error);
    }
  );


export default apiClient;

// export const get = (url:string) => { 
//     return apiClient.get(url)
// }