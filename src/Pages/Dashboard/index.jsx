import React from "react";
import Navbar from "../../components/core/Navbar";
import Card from "../../components/core/Card";

import { ReactComponent as Piggy } from "../../assets/icons/piggy.svg";
import { ReactComponent as Bag } from "../../assets/icons/bag.svg";
import { ReactComponent as Spent } from "../../assets/icons/spent.svg";
import { ReactComponent as Wallet } from "../../assets/icons/wallet.svg";
import { ReactComponent as Play } from "../../assets/icons/play.svg";
import AddBtn from "../../components/core/AddBtn";
import Modal from "../../components/Modal";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const totalIncome = useSelector((state) => state.totalIncome);
  const totalExpense = useSelector((state) => state.totalExpense);
  const totalBalance = useSelector((state) => state.totalBalance);
  const totalInvesment = useSelector((state) => state.totalInvestment);
  const totalSubscription = useSelector((state) => state.totalSubscription);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="nav-app">
      <Navbar label="Dashboard" />
      <div className="summary">
        <p className="px-5 py-3 font-semibold text-xl">Summary</p>
        <div className="dashboard-view px-5 py-3">
          <Card label="Total Income" icon={Bag} stats={totalIncome} />
          <Card label="Available balance" icon={Wallet} stats={totalBalance} />
          <Card label="Total Spent" icon={Spent} stats={totalExpense} />
          <Card label="Total Investment" icon={Piggy} stats={totalInvesment} />
          <Card
            label="Total Subscription"
            icon={Play}
            stats={totalSubscription}
          />
        </div>
      </div>
      <button onClick={() => setIsOpen(true)}>
        <AddBtn />
      </button>
      {isOpen && (
        <div className="blur-overlay" onClick={() => closeModal()}></div>
      )}
      {isOpen && <Modal closeModal={() => closeModal()} />}
    </div>
  );
}

export default Dashboard;
