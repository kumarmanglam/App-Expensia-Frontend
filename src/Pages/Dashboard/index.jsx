import React, { useEffect } from "react";
import Navbar from "../../components/core/Navbar";
import Card from "../../components/core/Card";

import { ReactComponent as Piggy } from "../../assets/icons/piggy.svg";
import { ReactComponent as Bag } from "../../assets/icons/bag.svg";
import { ReactComponent as Spent } from "../../assets/icons/spent.svg";
import { ReactComponent as Wallet } from "../../assets/icons/wallet.svg";
import { ReactComponent as Play } from "../../assets/icons/play.svg";
import AddBtn from "../../components/core/AddBtn";
import Modal from "../../components/Modal";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import Donut from "../../components/Chart";
import { actions } from "../../Store";
import { API } from "../../api";
import Cookies from "js-cookie";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const totalIncome = useSelector((state) => state.totalIncome);
  const totalExpense = useSelector((state) => state.totalExpense);
  const totalBalance = useSelector((state) => state.totalBalance);
  const totalInvesment = useSelector((state) => state.totalInvestment);
  const totalSubscription = useSelector((state) => state.totalSubscription);
  const dispatch = useDispatch();
  useEffect(() => {
    // TODO: remove this whole thing
    dispatch(
      actions.addIncome({
        id: "1690220311913-889",
        name: "SDE",
        amount: "320",
        category: "salary",
      })
    );
    dispatch(
      actions.addExpense({
        id: "1690220311913-825Psa",
        name: "SDE1",
        amount: "30",
        category: "salary",
      })
    );
    dispatch(
      actions.addExpense({
        id: "1690220311913-820",
        name: "SDE1",
        amount: "30",
        category: "salary",
      })
    );

    dispatch(
      actions.addInvestment({
        id: "1690220311913-840",
        name: "SDE2",
        amount: "400",
        category: "salary",
      })
    );

    dispatch(
      actions.addSubscription({
        id: "1690220311913-850",
        name: "SDE4",
        amount: "330",
        category: "salary",
      })
    );
  }, []);
  function closeModal() {
    setIsOpen(false);
  }
  const signIn = async () => {
    try {
      const response = await API.auth.signIn({
        email: "resume@jobdedo.com",
        password: "nahibataraha",
      });
      console.log(response);
      Cookies.set("idToken", response.data.idToken);
    } catch (e) {
      console.log(e);
    }
  };

  const validate = async () => {
    console.log(Cookies.get("idToken"));
    try {
      const response = await API.auth.validateToken({
        requestUri: "http://localhost:5173/dashboard",
        // postBody: { idToken: Cookies.get("idToken"), providerId: "password" },
        postBody: `idToken={${Cookies.get("idToken")}}&providerId="password"`,
        // requestUri: `[http://localhost:5173/dashboard]`,
        // returnIdpCredential: true,
        // returnSecureToken: true,
        // postBody: `idToken=[${Cookies.get(
        //   "idToken"
        // )}]&providerId=[${"password"}]`,
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  // console.log(EmailAuthProviderID);
  // "id_token={identityToken}&providerId=apple.com"
  return (
    <div className="nav-app">
      <Navbar label="Dashboard" />
      <div className="summary">
        <button onClick={validate}>"validate api response console</button>
        <button onClick={signIn}>sign in</button>
        <p className="px-5 py-3 font-semibold text-xl">Summary</p>
        <div className="dashboard-view px-5 py-3">
          <Card label="Total Income" icon={Bag} stats={totalIncome} />
          <Card label="Available balance" icon={Wallet} stats={totalBalance} />
          <Card label="Total Spent" icon={Spent} stats={totalExpense} />
          <Card label="Total Investment" icon={Piggy} stats={totalInvesment} />
          <Card
            label="Total Subscription"
            icon={Play}
            stats={totalSubscription}
          />
        </div>
      </div>
      <Donut
        income={totalIncome ?? 0}
        expense={totalExpense ?? 0}
        investment={totalInvesment ?? 0}
        subscription={totalSubscription ?? 0}
      />
      <button onClick={() => setIsOpen(true)}>
        <AddBtn />
      </button>
      {isOpen && (
        <div className="blur-overlay" onClick={() => closeModal()}></div>
      )}
      {isOpen && <Modal closeModal={() => closeModal()} />}
    </div>
  );
}

export default Dashboard;
