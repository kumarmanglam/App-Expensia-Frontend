import React from "react";

import { ReactComponent as Trendup } from "../../assets/icons/trendup.svg";
import { ReactComponent as Dashboard } from "../../assets/icons/dashboard.svg";
import { ReactComponent as Income } from "../../assets/icons/income.svg";
import { ReactComponent as Expense } from "../../assets/icons/expense.svg";
import { ReactComponent as Subs } from "../../assets/icons/subs.svg";
import { ReactComponent as Help } from "../../assets/icons/help.svg";
import { ReactComponent as Setting } from "../../assets/icons/setting.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";

function Sidebar() {
  return (
    <section className="Sidebar">
      <div className="Sidebar-primary side">
        <a>
          <Trendup className="side-icon side-logo" />
        </a>
        <div className="hr-break"></div>
        <a className="s-item">
          <Dashboard className="side-icon" />
        </a>
        <a className="s-item">
          <Income className="side-icon" />
        </a>
        <a className="s-item">
          <Expense className="side-icon" />
        </a>
        <a className="s-item">
          <Subs className="side-icon" />
        </a>
      </div>
      <div className="Sidebar-secondary side">
        <a className="s-item">
          <Help />
        </a>
        <a className="s-item">
          <Setting />
        </a>
        <a className="s-item">
          <Logout />
        </a>
      </div>
    </section>
  );
}

export default Sidebar;
