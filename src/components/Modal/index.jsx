import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import InputText from "../core/InputText";

function Modal({ closeModal }) {
  const [isActive, setIsActive] = useState(1);
  const location = useLocation();
  const path = location.pathname;
  const MODAL_LIST = [
    {
      id: 1,
      name: "Income",
    },
    {
      id: 2,
      name: "Expense",
    },
    {
      id: 3,
      name: "Investment",
    },
    {
      id: 4,
      name: "Subscription",
    },
  ];
  let modalContent;
  switch (isActive) {
    case 1:
      modalContent = (
        <div className="Modal-form p-3">
          <InputText label="Name" placeholder="Salary" type="text" />
          <div className="flex">
            <InputText label="Amount" placeholder="1000" note="$" />
            <InputText label="Received Date" type="Date" />
          </div>
        </div>
      );
      break;
    case 2:
      modalContent = (
        <div className="Modal-form p-3">
          <InputText label="Name" placeholder="Salary" type="text" />
          <div className="flex">
            <InputText label="Price" placeholder="1000" note="$" />
            <InputText label="Spent Date" type="Date" />
          </div>
        </div>
      );
      break;
  }
  return (
    <div className="Modal">
      <div className="Modal-header">
        <div className="modal-tabs flex">
          {MODAL_LIST?.map((item) => (
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
    </div>
  );
}

export default Modal;
