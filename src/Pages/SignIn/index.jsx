import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginAPICall } from "../../api/authService";
import Expensia from "../../assets/images/expensia.png";

function SignIn() {
  const [userData, setUserData] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const navigator = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (userData.usernameOrEmail.length === 0) {
      alert("Enter correct Username Or Email");
    } else if (userData.password.length === 0) {
      alert("Enter Password");
    } else {
      //to be handled later
      //trim the userdata extra space after the username or email
      setUserData({
        ...userData,
        usernameOrEmail: userData.usernameOrEmail.trim(),
      });
      try {
        await loginAPICall(userData);
        navigator("/dashboard");
      } catch (error) {
        alert("Enter Valid Credentials");
      }
      setUserData({
        usernameOrEmail: "",
        password: "",
      });
    }
  }
  return (
    <div className="sign">
      <form className="signCard" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <img src={Expensia} alt="ene" className="Expensia" />
        </div>
        <h1 className="signtitle">Login to Expensia</h1>
        <div className="inputWrap">
          <label className="labelSign" htmlFor="email">
            Username or Email
          </label>
          <input
            value={userData.usernameOrEmail}
            onChange={(e) =>
              setUserData({ ...userData, usernameOrEmail: e.target.value })
            }
            type="text"
            placeholder="Enter Username or Email"
            required
            className="inputSign"
            id="usernameOrEmail"
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
          <div className="SignLink">Forgot password?</div>
        </Link>
      </form>
      <div className="noAccount">
        <Link to="/signup">
          <div className="SignLink">Don't have an account? Signup now!</div>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
