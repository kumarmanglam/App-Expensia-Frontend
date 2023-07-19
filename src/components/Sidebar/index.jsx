import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Trendup } from "../../assets/icons/trendup.svg";
import { ReactComponent as Dashboard } from "../../assets/icons/dashboard.svg";
import { ReactComponent as Income } from "../../assets/icons/income.svg";
import { ReactComponent as Expense } from "../../assets/icons/expense.svg";
import { ReactComponent as Subs } from "../../assets/icons/subs.svg";
import { ReactComponent as Help } from "../../assets/icons/help.svg";
import { ReactComponent as Setting } from "../../assets/icons/setting.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import { ReactComponent as Money } from "../../assets/icons/money.svg";

import MenuItem from "./MenuItem";
function Sidebar() {
  const MENU_LIST = [
    {
      label: "Dashboard",
      icon: Dashboard,
      id: "1",
      path: "/dashboard",
    },
    {
      label: "Income",
      icon: Income,
      id: "2",
      path: "/income",
    },
    {
      label: "Expenses",
      icon: Expense,
      id: "3",
      path: "/expenses",
    },
    {
      label: "Investments",
      icon: Money,
      id: "4",
      path: "/investments",
    },
    {
      label: "Subscription",
      icon: Subs,
      id: "5",
      path: "/subscription",
    },
  ];

  return (
    <section className="Sidebar">
      <div className="Sidebar-primary side">
        <Link to="/">
          <Trendup className="side-icon side-logo" />
        </Link>
        <div className="hr-break"></div>
        {MENU_LIST?.map((item) => (
          <MenuItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            id={item.id}
            path={item.path}
          />
        ))}
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
