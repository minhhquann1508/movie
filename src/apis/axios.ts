import axios from "axios";

const instance  = axios.create({
    baseURL: import.meta.env.VITE_BASE_API,
});

// Thêm một bộ đón chặn request
instance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Thêm một bộ đón chặn response
instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

export default instance;