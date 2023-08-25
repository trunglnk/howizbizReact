import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const [token, setToken] = useState();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

    const validateInputs = () => {
      setUsernameError("");
      setPasswordError("");

      let isValid = true;

      if (!username) {
        setUsernameError("Trường tên đăng nhập không được bỏ trống");
        isValid = false;
      }

    if (!password) {
      setPasswordError("Trường mật khẩu không được bỏ trống");
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError("Trường mật khẩu phải có ít nhất 8 ký tự");
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    try {
      const response = await axios.post(
        "http://wlp.howizbiz.com/api/web-authenticate",
        {
          username: username,
          password: password,
        }
      );

      console.log("Login successful!", response);
      if (response.status === 200) {
        navigate("/user");
        localStorage.setItem("token", response.data.access_token);
        console.log(localStorage.getItem("token"));
      } 
      // else {
      //   console.error("Login error:", response);
      //   alert("Tên đăng nhập hoặc mật khẩu không đúng.");
      // }
    } catch (error) {
      console.error("Login error:", error);
      alert("Tên đăng nhập hoặc mật khẩu không đúng.");
    }
  };

  const changePass = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="container-fluid d-flex flex-column full-width p-0">
        <div className="d-flex header-login-container">
          <div className="px-3">
            <Link to="/">
              <img
                src={
                  "http://wlp.howizbiz.com/static/img/logoColor.e5de23ce.png"
                }
                height="70px"
                alt=""
              />
            </Link>
          </div>
          <div className="text-header-login">
            HỆ THỐNG BÁO CÁO VỀ HIỆN TRẠNG LOÀI NGUY CẤP, QUÝ, HIẾM ĐƯỢC ƯU TIÊN
            BẢO VỆ
          </div>
        </div>
        <div
          className="flex-grow-1 d-flex align-center login-container"
          style={{
            backgroundImage:
              "url('http://wlp.howizbiz.com/static/img/footerLogin.cf032540.svg')",
          }}
        >
          <div
            className="text-center form-login"
            style={{
              maxWidth: "450px",
              width: "30%",
              borderRadius: "25px",
              boxShadow: "rgba(253, 178, 206, 0.47) 0px 2px 20px",
            }}
          >
            <div className="full-width full-height px-4 py-4">
              <div className="full-width d-flex justify-content-center align-center">
                <div
                  className="logo-form d-flex"
                  style={{ maxWidth: "90px", cursor: "pointer" }}
                >
                  <div
                    className="v-responsive-sizer"
                    style={{ paddingBottom: "120%" }}
                  ></div>
                  <div
                    className="img-logo"
                    style={{
                      backgroundImage:
                        "url('http://wlp.howizbiz.com/static/img/logo.png')",
                      backgroundPosition: "center center",
                    }}
                  ></div>
                  <div
                    className="v-responsive-content"
                    style={{ width: "100px" }}
                  ></div>
                </div>
              </div>
              <div className="v-card-title">
                <div
                  className="text-center full-width font-weight-bold"
                  style={{ fontSize: "1.5rem" }}
                >
                  {" "}
                  Đăng nhập
                </div>
              </div>
              <div className="v-card-text py-0">
                <form className="login-form" onSubmit={handleLogin}>
                  <div className="input-container">
                    <span className="input-icon">
                      <i className="fa fa-user"></i>
                    </span>
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Tên đăng nhập"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  {usernameError && (
                    <div className="error-message">{usernameError}</div>
                  )}
                  <div className="input-container">
                    <span className="input-icon">
                      <i className="fa fa-lock"></i>
                    </span>
                    <input
                      className="input-field"
                      type={passwordVisible ? "text" : "password"}
                      placeholder="Mật khẩu"
                      value={password}
                      onChange={changePass}
                    />
                    <span
                      className="input-icon password-icon"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <i className="fa fa-eye-slash"></i>
                      ) : (
                        <i className="fa fa-eye"></i>
                      )}
                    </span>
                  </div>
                  {passwordError && (
                    <div className="error-message">{passwordError}</div>
                  )}
                  <button className="login-button" type="submit">
                    Đăng nhập
                  </button>
                  <div className="forgot-pass pt-2">Quên mật khẩu</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
