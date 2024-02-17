import axios from "axios";

const BASE_TRANSACTION_REST_URL =
  "https://expensia-be.onrender.com/expensia/transactions";

export const getTransactionApi = (id, type) => {
  return axios.get(BASE_TRANSACTION_REST_URL + "/" + id + "?type=" + type);
};

export const getAllTransactionApi = () => {
  return axios.get(BASE_TRANSACTION_REST_URL);
};

export const addTransactionApi = (transactionObj) => {
  console.log("axios api", transactionObj);
  return axios.post(BASE_TRANSACTION_REST_URL, transactionObj);
};

export const updateTransactionApi = (transactionObj) => {
  return axios.put(BASE_TRANSACTION_REST_URL, transactionObj);
};

export const deleteTransactionApi = (id, type) => {
  console.log("id is " + id);
  console.log("type is " + type);
  return axios.delete(BASE_TRANSACTION_REST_URL + "/" + id + "?type=" + type);
};
