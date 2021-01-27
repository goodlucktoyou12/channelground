/* eslint-disable import/prefer-default-export */
import axios from "axios";

const request = async (url, method, data) => {
  try {
    const response = await axios({
      url,
      method,
      data
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const api = {
  // User
  getLoggedUser: async () => request(`/api/user/logged`, "GET"),  
  // View
  postView: async videoId => request(`/api/${videoId}/view`, "POST")
};