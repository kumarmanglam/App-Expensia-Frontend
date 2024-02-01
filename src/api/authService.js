import axios from "axios";

// const getAuthBaseUrl = async () => {
//   const authBaseUrl = import.meta.env.AUTH_REST_API_BASE_URL;
//   return authBaseUrl;
// };
// const getAuthResetBaseUrl = async () => {
//   const resetBaseUrl = import.meta.env.AUTH_RESET_PASSWORD_BASE_URL;
//   return resetBaseUrl;
// };

const AUTH_REST_API_BASE_URL = "http://localhost:8080/expensia/auth";
const AUTH_RESET_PASSWORD_BASE_URL =
  "http://localhost:8080/expensia/password-reset";
const AUTH_USER_BASE_URL = "http://localhost:8080/expensia/user";

// Api Call Functions
export const loginAPICall = (loginObj) => {
  return axios
    .post(AUTH_REST_API_BASE_URL + "/login", loginObj)
    .then((response) => {
      const token = "Bearer " + response.data.accessToken;
      const role = response.data.role;
      sessionStorage.setItem("role", role);
      storeToken(token);
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const registerAPICall = (registerObj) => {
  return axios.post(
    "http://localhost:8080/expensia/auth" + "/register",
    registerObj
  );
};

export const sendResetLink = (email) => {
  return axios.post(AUTH_RESET_PASSWORD_BASE_URL + "/request/" + email);
};

export const resetPassword = (token, newPassword) => {
  return axios.post(
    AUTH_RESET_PASSWORD_BASE_URL + "/reset/" + token,
    { newPassword: newPassword } // Send newPassword in the request body
  );
};

// Create new password
export const changePassword = (credentialObj) => {
  return axios.post(AUTH_REST_API_BASE_URL + "/changePassword", credentialObj);
};

export const getCurrentUser = () => {
  return axios.get(AUTH_USER_BASE_URL);
};

export const fetchImageApi = () => {
  return axios
    .get("http://localhost:8080/expensia/image", {
      responseType: "arraybuffer",
    })
    .then((response) => {
      const arrayBufferView = new Uint8Array(response.data);
      const base64String = btoa(String.fromCharCode(...arrayBufferView));
      const imageUrl = `data:${response.headers["content-type"]};base64,${base64String}`;
      return imageUrl;
    });
};

export const uploadImageApi = (file) => {
  const formData = new FormData();
  formData.append("image", file);

  return axios
    .post("http://localhost:8080/expensia/image", formData)
    .then((response) => {
      return response.data; // Return the response from the server if needed
    })
    .catch((error) => {
      throw error; // Throw an error if the upload fails
    });
};

// Interceptors
axios.interceptors.request.use(
  function (config) {
    config.headers["Authorization"] = getToken();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Utility Funtions
export const saveLoggedInUser = (username) => {
  sessionStorage.setItem("authenticateduser", username);
};

export const getLoggedInUser = () => {
  const username = sessionStorage.getItem("authenticatedUser");
  return username;
};

export const isUserLoggedIn = () => {
  logoutIfTokenExpired();
  const token = sessionStorage.getItem("token");
  return token != null;
};

export const isAdminUser = () => {
  let role = sessionStorage.getItem("role");
  return (role != null) & (role === "ROLE_ADMIN");
};

export const storeToken = (token) => {
  sessionStorage.setItem("token", token);
};

export const getToken = () => sessionStorage.getItem("token");

export const isTokenExpired = () => {
  const token = sessionStorage.getItem("token");
  if (!token) {
    return true; // Token not found or null
  }
  const decodedToken = JSON.parse(atob(token?.split(".")[1])); // Decode the token
  const expiryTime = decodedToken.exp * 1000; // Expiry time in milliseconds
  return Date.now() > expiryTime;
  // the format of Date.now() is->
  // the format of expiryTime is->
};

export const logout = () => {
  sessionStorage.clear();
};

// Function to logout when the token is expired
export const logoutIfTokenExpired = () => {
  if (isTokenExpired()) {
    sessionStorage.clear();
    // alert("Session Expired");
  }
};
