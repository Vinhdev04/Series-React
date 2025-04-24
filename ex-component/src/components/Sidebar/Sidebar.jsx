import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-wrap">
          <h4 className="sidebar-title">Thiết kế mới</h4>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <a href="#!" className="sidebar-link">
                Văn phòng
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#!" className="sidebar-link">
                Phòng khách
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#!" className="sidebar-link">
                Phòng ngủ
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#!" className="sidebar-link">
                Phòng sách
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#!" className="sidebar-link">
                Nhà vườn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
