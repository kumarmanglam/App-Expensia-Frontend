import axios from "axios";

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

export const getUrl = (url) => {
  return `https://identitytoolkit.googleapis.com/v1${url}?key=${
    import.meta.env.VITE_APP_FIREBASE_API_KEY
  }`;
};

export const API = {
  auth: {
    async signUp(payload) {
      return axios.post(getUrl("/accounts:signUp"), payload);
    },
    async signIn(payload) {
      return axios.post(getUrl("/accounts:signInWithPassword"), payload);
    },

    async validateToken(payload) {
      return axios.post(getUrl("/accounts:signInWithIdp"), payload);
    },
  },
  database: {
    async set(payload) {
      try {
        const response = await axios.put(
          "https://[expense-app-b7708].firebaseio.com/users/jack/name.json",
          payload
        );
        return response.data;
      } catch (error) {
        alert("error posting data");
        throw error;
      }
    },
  },
};
