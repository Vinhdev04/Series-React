import React from "react";
import "./Header.css";
import logo from "../../assets/images/logo2.png";
function Header() {
  return (
    <>
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="Logo"></img>
        </div>
        <div className="header-navbar">
          <ul className="navbar-list">
            <li>
              <a href="!#" target="_blank" className="navbar-link">
                Trang Chủ
              </a>
            </li>
            <li>
              <a href="!#" target="_blank" className="navbar-link">
                Giới Thiệu
              </a>
            </li>
            <li>
              <a href="!#" target="_blank" className="navbar-link">
                Dự Án
              </a>
            </li>
            <li>
              <a href="!#" target="_blank" className="navbar-link">
                Liên Hệ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
