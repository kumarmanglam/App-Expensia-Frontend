import { configureStore, createSlice } from "@reduxjs/toolkit";

const inititalState = {
  income: [],
  expense: [],
  subscription: [],
  investment: [],
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
      state.expense = [...state.expense, action.payload];
      state.totalExpense = state.expense.reduce(
        (acc, curr) => (acc += parseInt(curr.amount)),
        0
      );
      state.totalBalance = state.totalIncome - state.totalExpense;
    },
    addInvestment(state, action) {
      state.investment = [...state.investment, action.payload];
      state.totalInvestment = state.investment.reduce(
        (acc, curr) => (acc += parseInt(curr.amount)),
        0
      );
    },
    addSubscription(state, action) {
      state.subscription = [...state.subscription, action.payload];
      state.totalSubscription = state.subscription.reduce(
        (acc, curr) => (acc += parseInt(curr.amount)),
        0
      );
    },
    editIncome(state, action) {
      console.log(action.payload);
    },
    updateIncome(state, action) {
      state.income = state.income.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    updateExpense(state, action) {
      state.expense = state.expense.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    updateInvestment(state, action) {
      state.investment = state.investment.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    updateSubscription(state, action) {
      state.subscription = state.subscription.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    deleteData(state, action) {
      if (action.payload.type === "income") {
        state.income = state.income.filter(
          (item) => item.id !== action.payload.data.id
        );
        state.totalIncome = state.income.reduce(
          (acc, curr) => (acc += parseInt(curr.amount)),
          0
        );
        state.totalBalance = state.totalIncome - state.totalExpense;
      } else if (action.payload.type === "expense") {
        state.expense = state.expense.filter(
          (item) => item.id !== action.payload.data.id
        );
        state.totalExpense = state.expense.reduce(
          (acc, curr) => (acc += parseInt(curr.amount)),
          0
        );
        state.totalBalance = state.totalIncome - state.totalExpense;
      } else if (action.payload.type === "investment") {
        state.investment = state.investment.filter(
          (item) => item.id !== action.payload.data.id
        );
        state.totalInvestment = state.investment.reduce(
          (acc, curr) => (acc += parseInt(curr.amount)),
          0
        );
      } else if (action.payload.type === "subscription") {
        state.subscription = state.subscription.filter(
          (item) => item.id !== action.payload.data.id
        );
        state.totalSubscription = state.subscription.reduce(
          (acc, curr) => (acc += parseInt(curr.amount)),
          0
        );
      }
    },
  },
});

export const actions = appSlice.actions;

const store = configureStore({
  reducer: appSlice.reducer,
});

export default store;
