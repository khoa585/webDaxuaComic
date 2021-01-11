import { AiTwotoneHome } from "react-icons/ai";
import React from "react";
import {
  Link
} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="header__menu">
      <Link to="/" className="navi_item">
        <li className="navi_item active">
          <span>
            <AiTwotoneHome />
          </span>
        </li>
      </Link>
      <Link to="/" className="navi_item">
        <li className="navi_item">
          <span>HOT</span>
        </li>
      </Link>
      <Link to="/lich-su" className="navi_item">
        <li className="navi_item" className="navi_item">
          <span>LỊCH SỬ</span>
        </li>
      </Link>
      <Link to="/danh-sach-truyen-thue" className="navi_item">
        <li className="navi_item">
          <span>TRUYỆN THUÊ</span>
        </li>
      </Link>
      <Link to="/"  className="navi_item">
        <li className="navi_item">
          <span>TÌM TRUYỆN</span>
        </li>
      </Link>
    </nav>
  );
};

export default React.memo(Navbar);
