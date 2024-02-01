import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Dashboard } from "../../assets/icons/dashboard.svg";
import { ReactComponent as Expense } from "../../assets/icons/expense.svg";
import { ReactComponent as Income } from "../../assets/icons/income.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import { ReactComponent as Money } from "../../assets/icons/money.svg";
import { ReactComponent as Setting } from "../../assets/icons/setting.svg";
import Expensia from "../../assets/images/expensia.png";

import { logout } from "../../api/authService";
import MenuItem from "./MenuItem";
import { useDispatch } from "react-redux";
import { getAllTransactionsThunk } from "../../Store/reducers/transaction";
import { fetchUser } from "../../Store/reducers/user";
export const MENU_LIST = [
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
    path: "/expense",
  },
  {
    label: "Investments",
    icon: Money,
    id: "4",
    path: "/investment",
  },
  // {
  //   label: "Subscription",
  //   icon: Subs,
  //   id: "5",
  //   path: "/subscription",
  // },
];
function Sidebar() {
  const dispatch = useDispatch();

  function handleLogout() {
    logout();
  }

  useEffect(() => {
    dispatch(getAllTransactionsThunk());
    dispatch(fetchUser());
  }, []);

  // call user and save it in redux or session storage

  return (
    <section className="Sidebar">
      <div className="Sidebar-primary side">
        <Link to="/dashboard">
          <img src={Expensia} alt="Expensia" className="sideLogo" />
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
      <div className="Sidebar-primary side ">
        {/* <a className="s-item">
          <Help />
        </a> */}
        {/* <div>
          <MenuItem key={12} label="Setting" icon={Setting} id={12} path="" />
        </div> */}
        <div onClick={handleLogout}>
          <MenuItem key={22} label="Logout" icon={Logout} id={22} path="" />
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
