import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import to from "await-to-js";

import {
  addTransactionApi,
  deleteTransactionApi,
  getAllTransactionApi,
  getTransactionApi,
  updateTransactionApi,
} from "../../api/transactionService";

const appInitState = {
  transactions: {
    list: [],
    pageNumber: 1,
    limit: 10,
    total: null,
    isFetching: false,
    hasMore: true,
  },
  summary: {
    totalIncome: 0,
    totalExpense: 0,
    totalInvestment: 0,
    balance: 0,
  },
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState: appInitState,
  reducers: {
    setTransactions: (state, action) => {
      state.transactions.list = action.payload;
      recalculateSummary(state);
    },
    addTransactions(state, action) {
      state.transactions.list = [...state.transactions.list, ...action.payload];
      recalculateSummary(state);
    },
    addSingleTransaction(state, action) {
      state.transactions.list = [...state.transactions.list, action.payload];
      recalculateSummary(state);
    },
    updateTransaction(state, action) {
      state.transactions.list = state.transactions.list.map((item) => {
        if (item.id == action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
      recalculateSummary(state);
    },
    deleteTransaction(state, action) {
      state.transactions.list = state.transactions.list.map((item) => {
        if (item.id != action.payload) {
          return item;
        }
      });
      recalculateSummary(state);
    },
  },
});

export const getTransactionThunk = createAsyncThunk(
  "api/transactions",
  async (params, { dispatch }) => {
    const [error, response] = await to(getTransactionApi(params));
    dispatch(addSingleTransaction(response.data));
  }
);

export const getAllTransactionsThunk = createAsyncThunk(
  "api/getAlTtransactions",
  async (params, { dispatch }) => {
    const [error, response] = await to(getAllTransactionApi());
    // if (params?.haveTransaction) dispatch(setTransactions(response.data));
    // else dispatch(setTransactions(response.data));
    dispatch(setTransactions(response.data));
  }
);

export const createTransactionThunk = createAsyncThunk(
  "api/addtransactions",
  async (params, { dispatch }) => {
    console.log("printing params ", params);
    const { onSuccess = () => {}, ...rest } = params;
    const [error, response] = await to(addTransactionApi(rest));
    if (response?.data) {
      dispatch(addSingleTransaction(response.data));
      onSuccess(response?.data);
    }
  }
);

export const updateTransactionThunk = createAsyncThunk(
  "api/transactions",
  async (params, { dispatch }) => {
    // console.log("printing params ", params);
    const [error, response] = await to(updateTransactionApi(params));
    dispatch(updateTransaction(response.data));
  }
);

// Helper function to recalculate summary values
const recalculateSummary = (state) => {
  state.summary.totalIncome = calculateTotal(state, "income");
  state.summary.totalExpense = calculateTotal(state, "expense");
  state.summary.totalInvestment = calculateTotal(state, "investment");
  state.summary.balance =
    state.summary.totalIncome - state.summary.totalExpense;
};

// Helper function to calculate total based on type
const calculateTotal = (state, type) => {
  return state.transactions.list
    .filter((item) => item.type === type)
    .reduce((total, item) => total + item.amount, 0);
};

export const deleteTransactionThunk = createAsyncThunk(
  "api/transactions",
  async (params, { dispatch }) => {
    const [error, response] = await to(
      deleteTransactionApi(params?.id, params?.type)
    );
    dispatch(deleteTransaction());
  }
);

export const {
  setTransactions,
  addTransactions,
  addSingleTransaction,
  updateTransaction,
  deleteTransaction,
} = transactionSlice.actions;
export default transactionSlice.reducer;
