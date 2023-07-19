import { configureStore, createSlice } from "@reduxjs/toolkit";

const inititalState = {
  income: [
    {
      id: 1,
      name: "Salary",
      Amount: 40000,
      Date: "24-04-2023",
      Category: "Salary",
      Note: "Received in Account",
    },
  ],
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
    addIncome(state, action) {},
  },
});

export const actions = appSlice.actions;

const store = configureStore({
  reducer: appSlice.reducer,
});

export default store;
