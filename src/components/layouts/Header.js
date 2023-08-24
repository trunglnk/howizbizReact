import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-navbar">
      <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand d-flex" href={{ javascript: void 0 }}>
            <Link to="/">
              <img src={Logo} alt="" width="50" />
            </Link>
            <h3 className="text-uppercase d-flex align-items-end ms-4">
              Hệ thống báo cáo về hiện trạng <br /> loài nguy cấp quý hiếm được
              ưu tiên bảo vệ
            </h3>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="mynavbar"
          >
            <form className="d-flex form-search">
              <input
                className="form-control rounded-0"
                type="text"
                placeholder="Tìm kiếm"
              />
              <button className="btn rounded-0 btn-search" type="button">
                <i className="bx bx-search text-light"></i>
              </button>
            </form>
          </div>
          <div className="dang_nhap">
            <Link to={"/dang-nhap"}>Đăng nhập</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
