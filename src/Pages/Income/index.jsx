import React from "react";
import Navbar from "../../components/core/Navbar";
import { ReactComponent as Bag } from "../../assets/icons/bag.svg";
import Card from "../../components/core/Card";
import AddBtn from "../../components/core/AddBtn";
import { useState } from "react";
import Modal from "../../components/Modal";
import { useSelector } from "react-redux";

function Income() {
  const [isOpen, setIsOpen] = useState(false);
  const totalIncome = useSelector((state) => state.totalIncome);
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="nav-app">
      <Navbar label="Income" />
      <div className="summary">
        <p className="px-5 py-3  font-semibold text-xl">Summary</p>
        <div className="px-5 py-3">
          <Card label="Total Income" icon={Bag} stats={totalIncome} />
          {/* <Card label="Number of Incomes" state="4" /> */}
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

export default Income;
