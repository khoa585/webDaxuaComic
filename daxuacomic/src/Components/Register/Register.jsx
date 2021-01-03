import React from "react";
import { Container } from "react-bootstrap";
import "./style.scss";
import Header from "../Header/Header";
import RegisterForm from "./Form/RegisterForm";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Avatar from "@material-ui/core/Avatar";
import Footer from "../Footer";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div>
      <Header />
      <div className="Container_sign_Up">
        <div className="distant_Comics"></div>
        <Container className="formRegister">
          <div className="title_Menu">
            <div className="title_comics">
              <Breadcrumbs aria-label="breadcrumb">
                <span>
                  <Link to="/">  <HomeIcon />&#160; Trang Chủ</Link>
                </span>
                <span>
                  <FaceIcon />
                    &#160; Đăng kí
                  </span>
              </Breadcrumbs>
            </div>
          </div>
          <div className="distant_Comics"></div>
          <div>
            <div className="account-page-title">
              <Avatar className="avatar_SignUp">
                <LockOutlinedIcon />
              </Avatar>
              <h1 className="pm-title pm-text-center">ĐĂNG KÍ</h1>
            </div>
            <div className="account-page-wrapper account-page-wrapper-form">
              <RegisterForm />
            </div>
          </div>
        </Container>
        <div className="distant_Comics"></div>
        <Footer></Footer>
      </div>
    </div>
  );
}
