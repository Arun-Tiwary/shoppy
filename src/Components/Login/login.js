import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const state = useSelector((state) => state.userData);

  const navigate = useNavigate();

  const handleLoginSubmit = () => {
    if (state.find((user) => user.username === username)) {
      if (state.find((user) => user.password === password)) {
        alert("YOU ARE LOGGED IN");
        navigate("/products");
      } else {
        alert("PAASWORD IS WRONG");
      }
    } else {
      alert("WRONG USERNAME");
    }
  };

  return (
    <div className="login-page">
      <h1> SIGN IN </h1>
      <div className="login">
        <label className="inputlabel">
          UserName
          <input
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            className="username"
            type="text"
            required
          />
        </label>
      </div>
      <div className="login">
        <label className="inputlabel">
          Password{" "}
          <span className="icon-showHide">
            {showPassword ? (
              <AiFillEye
                cursor={"pointer"}
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <AiFillEyeInvisible
                cursor={"pointer"}
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </span>
          <input
            name="username"
            className="username"
            type={showPassword ? "text" : "password"}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button onClick={handleLoginSubmit} className="button-signIn">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
