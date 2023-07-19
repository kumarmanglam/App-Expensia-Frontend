import React from "react";
import Navbar from "../../components/core/Navbar";
import { ReactComponent as Play } from "../../assets/icons/play.svg";
import Card from "../../components/core/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import AddBtn from "../../components/core/AddBtn";
import Modal from "../../components/Modal";

function Subscriptions() {
  const [isOpen, setIsOpen] = useState(false);
  const totalSubs = useSelector((state) => state.totalSubscription);
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="nav-app">
      <Navbar label="Subscription" />
      <div className="summary">
        <p className="px-5 py-3  font-semibold text-xl">Summary</p>
        <div className="px-5 py-3">
          <Card label="Total Subscription" icon={Play} stats={totalSubs} />
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

export default Subscriptions;
