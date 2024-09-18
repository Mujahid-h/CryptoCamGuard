import axios from "axios";

const BASE_URL = "http://192.168.7.59:5269/api/User";

export const login = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.log(
      "Error while signing in: ",
      error.response?.data || error.message
    );
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    console.log(
      "Error while signing up: ",
      error.response?.data || error.message
    );
  }
};
