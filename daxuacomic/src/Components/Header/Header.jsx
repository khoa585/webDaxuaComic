import React from "react";
import { Container } from "react-bootstrap";

import MainHeader from "./components/MainHeader";
import Navbar from "./components/Navbar";
import "./style.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header_top">
        <Container className="header__top"></Container>
      </div>
       <Container>
        <MainHeader />
      </Container>
      <Container fluid className="contai_header">
        <Container className="header__menu_Wrap">
          <div className="header__menu__option">
            <Navbar />
          </div>
        </Container>
      </Container>
    </header>
  );
}
