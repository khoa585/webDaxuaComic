import { AiTwotoneHome } from "react-icons/ai";
import React from "react";
import {
  Link
} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="header__menu">
      <li className=" navi_item active">
        <Link to="/">
          <span>
            <AiTwotoneHome />
          </span>
        </Link>
      </li>
      <li className="navi_item">
        <Link to="/">
          <span>HOT</span>
        </Link>
      </li>
      <li className="navi_item">
        <Link to="/">
          <span>LỊCH SỬ</span>
        </Link>
      </li>
      <li className="navi_item">
        <Link to="/danh-sach-truyen-thue">
          <span>DANH SACH TRUYỆN THUÊ</span>
        </Link>
      </li>
      <li className="navi_item">
        <Link to="/">
          <span>TÌM TRUYỆN</span>
        </Link>
      </li>
    </nav>
  );
};

export default React.memo(Navbar);
