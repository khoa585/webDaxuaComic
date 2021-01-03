import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { GiFemale, GiMale } from "react-icons/gi";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainHeader = () => {


  return (
    <Row className="header_Meta_Group">
      <Col lg={2}>
        <div className="header_Logo_Right">
          <Link to="/">
            <img
              src="https://www.dummies.com/wp-content/themes/dummies/img/branding/dummies.svg.gzip"
              alt="logo"
            ></img>
          </Link>
        </div>
      </Col>
      <Col lg={10}>
        <div className="header_Left">
          <div className="act_search">
            <input name="search" placeholder="Search..." />
          </div>
          <div>
            <button
              className="action subscribe red"
              title="Subscribe"
              type="submit"
            >
              <span>
                <BsSearch />
              </span>
            </button>
          </div>
        </div>
        <div className="header_Right">
          <div className="nav-right">
            <li className="nav-item">
              <GiMale />
            </li>
            <li className="nav-item">
              <GiFemale />
            </li>

            <Link to='/login' className="nav-item">
              <FaUserCircle />
            </Link>

          </div>
        </div>
      </Col>
    </Row>
  );
};

export default React.memo(MainHeader);
