import React, { useState } from "react";
import Expensia from "../../assets/images/expensia.png";
import { Link } from "react-router-dom";
import { API } from "../../api";
import Cookies from "js-cookie";

function SignUp() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const signUp = async () => {
    try {
      const response = await API.auth.signUp({
        email: userData.email,
        password: userData.password,
      });
      console.log(response);
      Cookies.set("idToken", response.data.idToken);
    } catch (e) {
      console.log(e);
    }
  };
  function handleSubmit() {
    if (userData.email.length === 0) {
      alert("Enter Email");
    } else if (userData.password.length === 0) {
      alert("Enter Password");
    } else if (userData.password !== userData.confirmpassword) {
      alert("Password not matching");
    } else {
      signUp();
      setUserData({
        email: "",
        password: "",
        confirmpassword: "",
      });
    }
  }
  return (
    <div className="sign">
      <div className="signCard">
        <div>
          <img src={Expensia} alt="ene" className="Expensia" />
        </div>
        <h1 className="signtitle">Open a account</h1>
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
        <div className="inputWrap">
          <label className="labelSign" htmlFor="password">
            Confirm Password
          </label>
          <input
            value={userData.confirmpassword}
            onChange={(e) =>
              setUserData({
                ...userData,
                confirmpassword: e.target.value,
              })
            }
            type="password"
            placeholder="Confirm password"
            required
            className="inputSign"
            id="password"
          />
        </div>
        <button className="signBtn" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>

      <div className="noAccount">
        <Link to="/signin">
          <div className="SignLink">Already have an account? Login now!</div>
        </Link>
      </div>
      <div className="noAccount floatLink  cursor-pointer">
        <Link to="/signin">
          <div className="SignLink text-white">Login</div>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
