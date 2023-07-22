import { configureStore, createSlice } from "@reduxjs/toolkit";

const inititalState = {
  income: [],
  expenses: [],
  subscription: [],
  investments: [],
  totalIncome: 0,
  totalBalance: 0,
  totalExpense: 0,
  totalInvestment: 0,
  totalSubscription: 0,
};

const appSlice = createSlice({
  name: "app",
  initialState: inititalState,
  reducers: {
    addIncome(state, action) {
      state.income = [...state.income, action.payload];
      state.totalIncome = state.income.reduce(
        (acc, curr) => (acc += parseInt(curr.amount)),
        0
      );
      state.totalBalance = state.totalIncome - state.totalExpense;
    },
    addExpense(state, action) {
      state.expenses = [...state.expenses, action.payload];
      state.totalExpense = state.expenses.reduce(
        (acc, curr) => (acc += parseInt(curr.amount)),
        0
      );
      state.totalBalance = state.totalIncome - state.totalExpense;
    },
    addInvestment(state, action) {
      state.investments = [...state.investments, action.payload];
      state.totalInvestment = state.investments.reduce(
        (acc, curr) => (acc += parseInt(curr.amount)),
        0
      );
    },
  },
});

export const actions = appSlice.actions;

const store = configureStore({
  reducer: appSlice.reducer,
});

export default store;
