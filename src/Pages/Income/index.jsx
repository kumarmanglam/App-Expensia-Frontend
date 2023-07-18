import React from "react";
import Navbar from "../../components/core/Navbar";
import { ReactComponent as Bag } from "../../assets/icons/bag.svg";
import Card from "../../components/core/Card";

function Income() {
  return (
    <div className="nav-app">
      <Navbar label="Income" />
      <div className="p-10">
        <Card label="Total Income" icon={Bag} stats="1000" />
      </div>
    </div>
  );
}

export default Income;
