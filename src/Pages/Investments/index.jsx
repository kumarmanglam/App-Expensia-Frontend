import React from "react";
import Navbar from "../../components/core/Navbar";
import { ReactComponent as Piggy } from "../../assets/icons/piggy.svg";
import Card from "../../components/core/Card";

function Investments() {
  return (
    <div className="nav-app">
      <Navbar label="Investments" />
      <div className="p-10">
        <Card label="Total Investment" icon={Piggy} stats="1000" />
      </div>
    </div>
  );
}

export default Investments;
