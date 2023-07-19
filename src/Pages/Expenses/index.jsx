import React from "react";
import Navbar from "../../components/core/Navbar";
import Card from "../../components/core/Card";

import { ReactComponent as Spent } from "../../assets/icons/spent.svg";
import AddBtn from "../../components/core/AddBtn";
import { useState } from "react";
import Modal from "../../components/Modal";

import { useSelector } from "react-redux";

function Expenses() {
  const [isOpen, setIsOpen] = useState(false);
  const totalExpense = useSelector((state) => state.totalExpense);
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="nav-app">
      <Navbar label="Expenses" />
      <div className="summary">
        <p className="px-5 py-3  font-semibold text-xl">Summary</p>
        <div className="px-5 py-3">
          <Card label="Total Spent" icon={Spent} stats={totalExpense} />
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

export default Expenses;
