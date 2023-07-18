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

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="nav-app">
      <Navbar label="Dashboard" />
      <div className="summary">
        <p className="px-5 py-3 font-semibold text-xl">Summary</p>
        <div className="dashboard-view px-5 py-3">
          <Card label="Total Income" icon={Bag} stats="1000" />
          <Card label="Available balance" icon={Wallet} stats="1000" />
          <Card label="Total Spent" icon={Spent} stats="1000" />
          <Card label="Total Investment" icon={Piggy} stats="1000" />
          <Card label="Total Subscription" icon={Play} stats="1000" />
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
