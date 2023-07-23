import React from "react";
import Navbar from "../../components/core/Navbar";
import { ReactComponent as Bag } from "../../assets/icons/bag.svg";
import Card from "../../components/core/Card";
import AddBtn from "../../components/core/AddBtn";
import { useState } from "react";
import Modal from "../../components/Modal";
import { useSelector } from "react-redux";
import Table from "../../components/Table";
import InputText from "../../components/core/InputText";

function Income() {
  const [isOpen, setIsOpen] = useState(false);
  const totalIncome = useSelector((state) => state.totalIncome);
  const Income = useSelector((state) => state.income);
  const [editData, setEditData] = useState(null);
  const [filterValue, setFilterValue] = useState("");

  const list = useSelector((state) => state.income);

  const filteredList = list.filter((item) =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="nav-app">
      <Navbar label="Income" />
      <div className="summary">
        <p className="px-5 py-3  font-semibold text-xl">Summary</p>
        <div className="dashboard-view px-5 py-3">
          <Card
            label="Total Income"
            icon={Bag}
            stats={totalIncome}
            currency="$"
          />
          <Card label="Number of Incomes" stats={Income.length} />
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
          setIsOpen(true);
          setEditData(val);
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

export default Income;
