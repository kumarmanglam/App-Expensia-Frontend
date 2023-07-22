// categoryConfig.js
const categoryConfig = {
  income: {
    defaultData: {
      name: "",
      amount: 0,
      date: formattedDate,
      category: "Salary",
    },
    categoryList: [
      { id: 0, name: "Salary" },
      { id: 1, name: "Dividends" },
      { id: 2, name: "Investments" },
      { id: 3, name: "Passive Income" },
    ],
  },
  expense: {
    defaultData: {
      name: "",
      amount: 0,
      date: formattedDate,
      category: "Food",
    },
    categoryList: [
      { id: 0, name: "Food" },
      { id: 1, name: "Housing" },
      { id: 2, name: "Transportation" },
      { id: 3, name: "Clothing" },
      { id: 4, name: "Health care" },
      { id: 5, name: "Education and child care" },
      { id: 6, name: "Other" },
    ],
  },
  investment: {
    defaultData: {
      name: "",
      amount: 0,
      date: formattedDate,
      category: "Stocks",
    },
    categoryList: [
      { id: 0, name: "Stocks" },
      { id: 1, name: "Mutual Funds" },
      { id: 2, name: "Bonds" },
      { id: 3, name: "Gold" },
      { id: 4, name: "Real estate" },
      { id: 5, name: "ETF" },
    ],
  },
  subscription: {
    defaultData: {
      name: "",
      amount: 0,
      date: formattedDate,
      category: "Monthly",
    },
    categoryList: [
      { id: 0, name: "Monthly" },
      { id: 1, name: "Quarterly" },
      { id: 2, name: "Yearly" },
    ],
  },
};

export default categoryConfig;
