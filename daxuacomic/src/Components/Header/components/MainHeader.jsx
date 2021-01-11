import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { GiFemale, GiMale } from "react-icons/gi";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import FormHeader from './FormHeader'
const MainHeader = ({ setvalue_, value, onSubmitSearch }) => {
  const { isLoggedIn, token, logout } = React.useContext(AuthContext);

  return (
    <Row className="header_Meta_Group">
      <Col lg={2} md={2} sm={2} xs={2}>
        <div className="header_Logo_Right">
          <Link to="/">
            <img
              src="https://www.dummies.com/wp-content/themes/dummies/img/branding/dummies.svg.gzip"
              alt="logo"
            ></img>
          </Link>
        </div>
      </Col>
      <Col lg={10}  md={10} sm={10} xs={10}>
        <div className="header_Left">
          <div className="act_search">
            <input
              name="search"
              placeholder="Search..."
              onChange={(e) => setvalue_(e.target.value)}
            />
          </div>
          <div>
            <button
              className="action subscribe red"
              title="Subscribe"
              type="submit"
              onClick={onSubmitSearch}
              disabled={!!value.trim() ? false : true}
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
              <Link to="/">
                <GiMale />
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/">
                <GiFemale />
              </Link>
            </li>

            {
              isLoggedIn ?
                <li className="nav-item">
                  <FaUserCircle />
                  <div
                    className="list__wrapper"
                  >
                    <div className="list__item">
                      <div className="list">
                        <FormHeader
                          {...{ token, logout }}
                        />
                      </div>
                    </div>
                  </div>
                </li> :
                <Link to='/dang-nhap' className="nav-item">
                  <FaUserCircle />
                </Link>
            }
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default React.memo(MainHeader);
