import React, { useState } from "react";
import Expensia from "../../assets/images/expensia.png";
import { Link } from "react-router-dom";
import { API } from "../../api";

function SignIn() {
  // console.log(EmailAuthProviderID);
  // "id_token={identityToken}&providerId=apple.com"
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const signIn = async () => {
    try {
      const response = await API.auth.signIn({
        email: userData.email,
        password: userData.password,
      });
      console.log(response);
      Cookies.set("idToken", response.data.idToken);
    } catch (e) {
      console.log(e);
    }
  };
  const validate = async () => {
    try {
      const response = await API.auth.validateToken({
        requestUri: "http://localhost",
        postBody: `id_token=[{${Cookies.get(
          "idToken"
        )}}]&providerId=["password"]`,
      });
      console.log("validating success");
      alert("validate errrr");
      console.log(response);
    } catch (e) {
      console.log("validating error");
      alert("validate ssssss");
      console.log(e);
    }
  };
  function handleSubmit() {
    if (userData.email.length === 0) {
      alert("Enter Email");
    } else if (userData.password.length === 0) {
      alert("Enter Email");
    } else {
      signIn();
      validate();
      setUserData({
        email: "",
        password: "",
      });
    }
  }
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
        <button className="signBtn" onClick={handleSubmit}>
          Login
        </button>
        <Link to="/forgotpassword">
          <div className="SignLink">Forgot password?</div>
        </Link>
      </div>
      <div className="noAccount">
        <Link to="/signup">
          <div className="SignLink">Don't have an account? Signup now!</div>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
