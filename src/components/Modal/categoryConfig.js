// categoryConfig.js
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const day = String(currentDate.getDate()).padStart(2, "0");
const formattedDate = `${year}-${month}-${day}`;

export const CATEGORY_CONFIG_MODAL = {
  income: {
    defaultData: {
      name: "",
      amount: 0,
      date: formattedDate,
      category: "Salary",
      type: "income",
    },
    categoryList: [
      { id: 0, name: "Salary" },
      { id: 1, name: "Investments" },
      { id: 2, name: "Dividends" },
      { id: 2, name: "Rental" },
      { id: 3, name: "Other" },
    ],
  },
  expense: {
    defaultData: {
      name: "",
      amount: 0,
      date: formattedDate,
      category: "Housing",
      type: "income",
    },
    categoryList: [
      { id: 0, name: "Housing" },
      { id: 1, name: "Transportation" },
      { id: 2, name: "Food" },
      { id: 3, name: "Healthcare" },
      { id: 4, name: "Clothing" },
      { id: 5, name: "Utility" },
      { id: 6, name: "Other " },
    ],
  },
  investment: {
    defaultData: {
      name: "",
      amount: 0,
      date: formattedDate,
      category: "Stocks",
      type: "income",
    },
    categoryList: [
      { id: 0, name: "Stocks" },
      { id: 1, name: "Mutual Funds" },
      { id: 2, name: "Bonds" },
      { id: 3, name: "Gold" },
      { id: 4, name: "Real estate" },
      { id: 5, name: "Other" },
    ],
  },
};

// subscription: {
//   defaultData: {
//     name: "",
//     amount: 0,
//     date: formattedDate,
//     category: "Monthly",
//   },
//   categoryList: [
//     { id: 0, name: "Monthly" },
//     { id: 1, name: "Quarterly" },
//     { id: 2, name: "Yearly" },
//   ],
// },
