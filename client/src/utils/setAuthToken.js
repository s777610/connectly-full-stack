// Adding token to every request if we are login

import axios from "axios";

const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // If no token, Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
