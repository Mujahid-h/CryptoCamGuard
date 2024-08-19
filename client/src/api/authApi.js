import axios from "axios";

const BASE_URL = "http://localhost:8000/api/auth";

export const login = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    console.log("Error while signing in: ", error);
  }
};

export const register = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.log("Error while signing in: ", error);
  }
};
