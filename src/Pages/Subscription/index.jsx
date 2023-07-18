import React from "react";
import Navbar from "../../components/core/Navbar";
import { ReactComponent as Play } from "../../assets/icons/play.svg";
import Card from "../../components/core/Card";

function Subscriptions() {
  return (
    <div className="nav-app">
      <Navbar label="Subscription" />
      <div className="summary">
        <p className="px-5 py-3  font-semibold text-xl">Summary</p>
        <div className="px-5 py-3">
          <Card label="Total Subscription" icon={Play} stats="1000" />
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;
