import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import InputText from "../core/InputText";
import { useEffect } from "react";
import SelectInput from "../core/SelectInput";
import { useDispatch } from "react-redux";
import { actions } from "../../Store";

function Modal({ closeModal }) {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState(0);
  const location = useLocation();
  const path = location.pathname;
  // console.log(path.slice(1));
  const MODAL_LIST = [
    {
      id: 0,
      name: "Income",
    },
    {
      id: 1,
      name: "Expenses",
    },
    {
      id: 2,
      name: "Investments",
    },
    {
      id: 3,
      name: "Subscription",
    },
  ];
  const INCOME_CATEGORY = [
    {
      id: 0,
      name: "Salary",
    },
    {
      id: 1,
      name: "Dividends",
    },
    {
      id: 2,
      name: "Investments",
    },
    {
      id: 3,
      name: "Passive Income",
    },
  ];
  const EXPENSE_PRIMARY = [
    {
      id: 0,
      name: "Food",
    },
    {
      id: 1,
      name: "Housing",
    },
    {
      id: 2,
      name: "Transportation",
    },
    {
      id: 3,
      name: "Clothing",
    },
    {
      id: 4,
      name: "Health care",
    },
    {
      id: 5,
      name: "Education and child care",
    },
    {
      id: 6,
      name: "Other",
    },
  ];
  const SUBS_CATEGORY = [
    {
      id: 0,
      name: "Monthly",
    },
    {
      id: 1,
      name: "Quarterly",
    },
    {
      id: 2,
      name: "Yearly",
    },
  ];
  const INVESTMENT_CATEGORY = [
    {
      id: 0,
      name: "Stocks",
    },
    {
      id: 1,
      name: "Mutual Funds",
    },
    {
      id: 2,
      name: "Bonds",
    },
    {
      id: 3,
      name: "Gold",
    },
    {
      id: 4,
      name: "Real estate",
    },
    {
      id: 5,
      name: "ETF",
    },
  ];
  let currid;
  MODAL_LIST.forEach((item) => {
    if (item.name.toLowerCase() === path.slice(1)) {
      currid = item.id;
    }
  });
  if (!currid) {
    currid = 0;
  }

  useEffect(() => {
    setIsActive(currid);
  }, [path]);
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  // useEffect(() => {
  //   console.log(formattedDate);
  // });
  function generateUniqueId() {
    const timestamp = new Date().getTime(); // Get the current timestamp in milliseconds.
    const randomNum = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999.

    const uniqueId = `${timestamp}-${randomNum}`;
    return uniqueId;
  }
  const [incomeData, setIncomeData] = useState({
    id: generateUniqueId(),
    name: "",
    amount: 0,
    date: formattedDate,
    category: "Salary",
  });
  const [expenseData, setExpenseData] = useState({
    id: generateUniqueId(),
    name: "",
    amount: 0,
    date: formattedDate,
    category: "Food",
  });
  const [investmentData, setInvestmentData] = useState({
    id: generateUniqueId(),
    name: "",
    amount: 0,
    date: formattedDate,
    category: "Stocks",
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (isActive === 0) {
      dispatch(actions.addIncome(incomeData));
    } else if (isActive === 1) {
      dispatch(actions.addExpense(expenseData));
    } else if (isActive === 2) {
      dispatch(actions.addInvestment(investmentData));
    }
    setIncomeData({
      id: generateUniqueId(),
      name: "",
      amount: 0,
      date: formattedDate,
      category: "Salary",
    });
    setExpenseData({
      id: generateUniqueId(),
      name: "",
      amount: 0,
      date: formattedDate,
      category: "Food",
    });
    setInvestmentData({
      id: generateUniqueId(),
      name: "",
      amount: 0,
      date: formattedDate,
      category: "Stocks",
    });
    // console.log(incomeData);
    closeModal();
  }

  let modalContent;
  switch (isActive) {
    case 0:
      modalContent = (
        <div className="Modal-form p-3">
          <div className="grid form-header">
            <InputText
              label="Name"
              placeholder="Salary"
              type="text"
              value={incomeData.name}
              handleChange={(val) =>
                setIncomeData({ ...incomeData, name: val })
              }
            />
            <SelectInput
              list={INCOME_CATEGORY}
              label="Category"
              value={incomeData.category}
              handleChange={(val) =>
                setIncomeData({ ...incomeData, category: val })
              }
            />
          </div>
          <div className="grid grid-cols-2 justify-items-center items-center">
            <InputText
              label="Amount"
              type="Number"
              placeholder="1000"
              note="$"
              classes="form-input"
              value={incomeData.amount}
              handleChange={(val) =>
                setIncomeData({ ...incomeData, amount: val })
              }
            />
            <InputText
              label="Received Date"
              type="Date"
              classes="form-input"
              value={incomeData.date}
              handleChange={(val) =>
                setIncomeData({ ...incomeData, data: val })
              }
            />
          </div>
        </div>
      );
      break;
    case 1:
      modalContent = (
        <div className="Modal-form p-3">
          <div className="grid grid-cols-2">
            <InputText
              label="Name"
              placeholder="Swiggy"
              type="text"
              value={expenseData.name}
              handleChange={(val) =>
                setExpenseData({ ...expenseData, name: val })
              }
            />
            <SelectInput
              list={EXPENSE_PRIMARY}
              label="Category"
              value={expenseData.category}
              handleChange={(val) =>
                setExpenseData({ ...expenseData, category: val })
              }
            />
          </div>
          <div className="flex">
            <InputText
              label="Price"
              type="Number"
              placeholder="1000"
              note="$"
              value={expenseData.amount}
              handleChange={(val) =>
                setExpenseData({ ...expenseData, amount: val })
              }
            />
            <InputText
              label="Spent Date"
              type="Date"
              value={expenseData.date}
              handleChange={(val) =>
                setExpenseData({ ...expenseData, date: val })
              }
            />
          </div>
        </div>
      );
      break;
    case 2:
      modalContent = (
        <div className="Modal-form p-3">
          <div className="grid form-header">
            <InputText
              label="Name"
              placeholder="Infy"
              type="text"
              note="Stocks/Bonds"
              value={investmentData.name}
              handleChange={(val) =>
                setInvestmentData({ ...expenseData, name: val })
              }
            />
            <SelectInput
              list={INVESTMENT_CATEGORY}
              label="Category"
              value={investmentData.category}
              handleChange={(val) =>
                setInvestmentData({ ...investmentData, category: val })
              }
            />
          </div>
          <div className="flex">
            <InputText
              label="Amount invested"
              type="Number"
              placeholder="1000"
              note="$"
              value={investmentData.amount}
              handleChange={(val) =>
                setInvestmentData({ ...investmentData, amount: val })
              }
            />
            <InputText
              label="Date"
              type="Date"
              value={investmentData.date}
              handleChange={(val) =>
                setInvestmentData({ ...investmentData, date: val })
              }
            />
          </div>
        </div>
      );
      break;
    case 3:
      modalContent = (
        <div className="Modal-form p-3">
          <div className="grid form-header">
            <InputText
              label="Name"
              placeholder="EMI"
              type="text"
              note="Netflix/Broadband"
            />
            <SelectInput list={SUBS_CATEGORY} label="Category" />
          </div>
          <div className="flex">
            <InputText
              label="Subscription amount"
              placeholder="1000"
              note="$"
            />
            <InputText label="Date" type="Date" />
          </div>
        </div>
      );
      break;
  }
  return (
    <div className="Modal">
      <div className="Modal-header">
        <div className="modal-tabs flex">
          {path.slice(1) === "dashboard"
            ? MODAL_LIST?.map((item) => (
                <div
                  key={item.id}
                  className={`modal-tab p-3 ${
                    isActive === item.id ? "modal-tab-active" : ""
                  }`}
                  onClick={() => setIsActive(item.id)}
                >
                  <p>{item.name}</p>
                </div>
              ))
            : MODAL_LIST?.map((item) => (
                <div
                  key={item.id}
                  className={`modal-tab p-3 ${
                    isActive === item.id ? "modal-tab-active" : "modal-inactive"
                  }`}
                  onClick={() => setIsActive(item.id)}
                >
                  <p>{item.name}</p>
                </div>
              ))}
        </div>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {modalContent}
        <div className="Modal-form p-3"></div>
        <div className="Modal-action flex justify-end p-2 gap-1">
          <button className="py-2 px-5 Modal-add rounded-lg">Add</button>
          <button
            className="py-2 px-5 Modal-cancel  rounded-lg"
            onClick={() => closeModal()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default Modal;
