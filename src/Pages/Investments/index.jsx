import React from "react";
import Navbar from "../../components/core/Navbar";
import { ReactComponent as Piggy } from "../../assets/icons/piggy.svg";
import Card from "../../components/core/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "../../components/Modal";
import AddBtn from "../../components/core/AddBtn";

function Investments() {
  const [isOpen, setIsOpen] = useState(false);
  const totalInvesment = useSelector((state) => state.totalInvestment);
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="nav-app">
      <Navbar label="Investments" />
      <div className="summary">
        <p className="px-5 py-3  font-semibold text-xl">Summary</p>
        <div className="px-5 py-3">
          <Card label="Total Investment" icon={Piggy} stats={totalInvesment} />
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

export default Investments;
