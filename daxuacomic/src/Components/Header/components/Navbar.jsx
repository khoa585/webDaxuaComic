import { AiTwotoneHome } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import MenuDrop from "./MenuDrop";
import React, { useState } from "react";
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
        <span>THEO DÕI</span>
      </li>
      <li className="navi_item">
        <span>LỊCH SỬ</span>
      </li>
      <li className="navi_item list_item">
        <span>THỂ LOẠI</span>

        <BsChevronDown />
        <div className="dropdown_Wrap">
          <MenuDrop />
        </div>
      </li>
      <li className="navi_item">
        <span>XẾP HẠNG</span>
      </li>
      <li className="navi_item">
        <span>TÌM TRUYỆN</span>
      </li>
    </nav>
  );
};

export default React.memo(Navbar);
