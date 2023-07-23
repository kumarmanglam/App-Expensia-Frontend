import React from "react";
import Navbar from "../../components/core/Navbar";
import Card from "../../components/core/Card";

import { ReactComponent as Spent } from "../../assets/icons/spent.svg";
import AddBtn from "../../components/core/AddBtn";
import { useState } from "react";
import Modal from "../../components/Modal";

import { useSelector } from "react-redux";
import Table from "../../components/Table";
import InputText from "../../components/core/InputText";

function Expenses() {
  const [isOpen, setIsOpen] = useState(false);
  const totalExpense = useSelector((state) => state.totalExpense);
  const Expense = useSelector((state) => state.expense);
  const [editData, setEditData] = useState(null);
  const [filterValue, setFilterValue] = useState("");

  const [sortDirection, setSortDirection] = useState("asc");
  const [sortColumn, setSortColumn] = useState(null);

  const list = useSelector((state) => state.expense);

  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="nav-app">
      <Navbar label="Expenses" />
      <div className="summary">
        <p className="px-5 py-3  font-semibold text-xl">Summary</p>
        <div className=" dashboard-view px-5 py-3">
          <Card
            label="Total Spent"
            icon={Spent}
            stats={totalExpense}
            currency="$"
          />
          <Card label="Number of Expenses" stats={Expense.length} />
        </div>
      </div>
      <div className="w-52 px-5">
        <InputText
          placeholder="Filter by name"
          value={filterValue}
          handleChange={(val) => {
            setFilterValue(val);
          }}
        />
      </div>
      <Table
        handleModal={(val) => {
          setEditData(val);
          setIsOpen(true);
        }}
        list={filterValue ? filteredList : list}
      />
      <button
        onClick={() => {
          setEditData(null);
          setIsOpen(true);
        }}
      >
        <AddBtn />
      </button>
      {isOpen && (
        <div className="blur-overlay" onClick={() => closeModal()}></div>
      )}
      {isOpen && <Modal closeModal={() => closeModal()} editdata={editData} />}
    </div>
  );
}

export default Expenses;
