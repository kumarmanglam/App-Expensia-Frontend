import axios from "axios";

const INCOME_BASE_URL = "https://expensia-be.onrender.com/expensia/incomes";

export const getIncomeApi = (id) => {
  return axios.get(INCOME_BASE_URL + "/" + id);
};

export const getAllIncomesApi = () => {
  return axios.get(INCOME_BASE_URL);
};

export const addIncomeApi = (incomeObj) => {
  return axios.post(INCOME_BASE_URL, incomeObj);
};

export const updateIncomeApi = (incomeObj) => {
  return axios.put(INCOME_BASE_URL + "/" + incomeObj?.id, incomeObj);
};

export const deleteIncomeApi = (id) => {
  return axios.delete(INCOME_BASE_URL + "/" + id);
};

export const getAllIncomeAsSortedApi = (sortByField, orderBy) => {
  return axios.get(
    INCOME_BASE_URL +
      "/sorted?sortByField=" +
      sortByField +
      "&orderBy=" +
      orderBy
  );
};

export const getAllIncomesPaginatedApi = (offset, pageSize) => {
  return axios.get(
    INCOME_BASE_URL + "/paginate?offset=" + offset + "&pageSize=" + pageSize
  );
};

export const getAllIncomesPaginatedAndSortedApi = (
  offset,
  pageSize,
  sortByField,
  orderBy
) => {
  // console.log(pageSize, sortByField, orderBy);
  // console.log(
  //   INCOME_BASE_URL +
  //     "/paginateAndSort?offset=" +
  //     offset +
  //     "&pageSize=" +
  //     pageSize +
  //     "&sortByField=" +
  //     sortByField +
  //     "&orderBy=" +
  //     orderBy
  // );
  return axios.get(
    INCOME_BASE_URL +
      "/paginateAndSort?offset=" +
      offset +
      "&pageSize=" +
      pageSize +
      "&sortByField=" +
      sortByField +
      "&orderBy=" +
      orderBy
  );
};
