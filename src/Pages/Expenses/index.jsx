import React from "react";
import Navbar from "../../components/core/Navbar";
import Card from "../../components/core/Card";

import { ReactComponent as Spent } from "../../assets/icons/spent.svg";

function Expenses() {
  return (
    <div className="nav-app">
      <Navbar label="Expenses" />
      <div className="p-10">
        <Card label="Total Spent" icon={Spent} stats="1000" />
      </div>
    </div>
  );
}

export default Expenses;
