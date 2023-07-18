import React from "react";
import Navbar from "../../components/core/Navbar";
import Card from "../../components/core/Card";

import { ReactComponent as Spent } from "../../assets/icons/spent.svg";
import AddBtn from "../../components/core/AddBtn";
import { useState } from "react";
import Modal from "../../components/Modal";

function Expenses() {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="nav-app">
      <Navbar label="Expenses" />
      <div className="summary">
        <p className="px-5 py-3  font-semibold text-xl">Summary</p>
        <div className="px-5 py-3">
          <Card label="Total Spent" icon={Spent} stats="1000" />
        </div>
      </div>
      <AddBtn label="Add Expenses" />
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
