import React, { useState } from "react";
import Expensia from "../../assets/images/expensia.png";
import { Link } from "react-router-dom";

function SignIn() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="sign">
      <div className="signCard">
        <div>
          <img src={Expensia} alt="ene" className="Expensia" />
        </div>
        <h1 className="signtitle">Login to Expensia</h1>
        <div className="inputWrap">
          <label className="labelSign" htmlFor="email">
            Email
          </label>
          <input
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            type="email"
            placeholder="Enter email"
            required
            className="inputSign"
            id="email"
          />
        </div>
        <div className="inputWrap">
          <label className="labelSign" htmlFor="password">
            Password
          </label>
          <input
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            type="password"
            placeholder="Enter password"
            required
            className="inputSign"
            id="password"
          />
        </div>
        <button className="signBtn">Login</button>
        <Link to="/forgotpassword">
          <a className="SignLink">Forgot password?</a>
        </Link>
      </div>

      <div className="noAccount">
        <Link to="/signup">
          <a className="SignLink">Don't have an account? Signup now!</a>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
