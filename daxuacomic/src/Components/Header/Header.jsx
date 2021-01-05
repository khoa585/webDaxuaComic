import React from "react";
import { Container } from "react-bootstrap";

import MainHeader from "./components/MainHeader";
import Navbar from "./components/Navbar";
import "./style.scss";
import { to_slug } from '../../Common/stringHelper'
import { Link, Route, useHistory } from "react-router-dom";
export default function Header() {
  const [value, setvalue] = React.useState('')
  let history = useHistory();
  const onSubmitSearch = async () => {
    const regex = /^ +(?=[^\w]|)/ig;
    if (!!value.trim()) {
      history.push(`/tim-kiem/${value.replace(regex, '')}`);
      window.location.reload();
    }

  }
  const setvalue_ = (e) => {
    setvalue(e)
  }
  return (
    <header className="header">
      <div className="header_top">
        <Container className="header__top"></Container>
      </div>
      <Container>
        <MainHeader {...{ setvalue_, value, onSubmitSearch }} />
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
