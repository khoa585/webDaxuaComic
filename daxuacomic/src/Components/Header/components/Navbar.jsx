import { AiTwotoneHome } from "react-icons/ai";
import React from "react";
import {
  Link
} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="header__menu">
      <li className=" navi_item active">
        <span>
          <AiTwotoneHome />
        </span>
      </li>
      <li className="navi_item">
        <span>HOT</span>
      </li>

      <li className="navi_item">
        <span>LỊCH SỬ</span>
      </li>

      <li className="navi_item">
        <Link to="/danh-sach-truyen-thue">
          <span>DANH SACH TRUYỆN THUÊ</span>
        </Link>
      </li>


      <li className="navi_item">
        <span>TÌM TRUYỆN</span>
      </li>
    </nav>
  );
};

export default React.memo(Navbar);
