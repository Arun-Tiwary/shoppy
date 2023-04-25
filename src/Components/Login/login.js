import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userDatabase } from "../../Utils/userData";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("Guest");
  const [password, setPassword] = useState("1234");
  const [userValue, setUserValue] = useState();
  const [passwordValue, setPasswordValue] = useState();

  const state = useSelector((state) => state.userData);
  const { cart } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(state);
  console.log("I am cart", cart);

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    if (userDatabase.find((user) => user.username === username)) {
      if (state.find((user) => user.username !== username)) {
        if (userDatabase.find((user) => user.password === password)) {
          alert("YOU ARE LOGGED IN");
          dispatch({
            type: "ADD_USER",
            payload: { username: username, password: password },
          });
          // <Navigate to="/products" replace={true} />;
          cart.length >= 1 ? navigate("/cart") : navigate("/products");
        } else {
          alert("PASSWORD IS WRONG");
        }
      }
    } else {
      alert("WRONG USERNAME");
    }
  };

  return (
    <div className="login-page">
      <h1> SIGN IN </h1>
      <form onSubmit={handleLoginSubmit}>
        <div className="login">
          <label className="inputlabel">
            UserName
            <input
              value={userValue}
              placeholder="Enter your user name"
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              className="username"
              type="text"
              required
            />
          </label>
        </div>
        <div className="login">
          <label className="passwordlabel">
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
              value={passwordValue}
              placeholder="Enter your password"
              name="username"
              className="username"
              type={showPassword ? "text" : "password"}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <p
          className="credentials"
          onClick={() => {
            setUserValue("Guest");
            setPasswordValue("1234");
          }}
        >
          Use Credentials
        </p>
        <div>
          <button type="submit" className="button-signIn">
            Sign In
          </button>
        </div>
        <div>
          {/* <button
            type="click"
            onClick={() => {
              // setPassword("1234");
              // setUsername("Guest");
              handleLoginSubmit();
            }}
            className="button-signIn"
          >
            Guest Sign In
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
