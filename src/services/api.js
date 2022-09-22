import axios from "axios";


const baseUrl = process.env.REACT_APP_BASE_URL;

axios.defaults.withCredentials = true;

const getAdminDetails = () => {
  return axios.get(
    `${baseUrl}`
  );
};

export const apiProvider = {
    getAdminDetails,
  }; 
  