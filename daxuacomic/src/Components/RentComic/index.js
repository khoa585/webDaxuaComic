import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Background from "../Background/Background";

import ShowComic from "./ShowComic";
import Footer from "../Footer";
import BackToTop from "../Comon/BackToTop/BackToTop";
import { Link, Route, useHistory } from "react-router-dom";
import { getListComicRemd } from '../../api/comic'
import "../Home/style.scss";
const RentComic = (props) => {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        (async () => {
            let result = await getListComicRemd();
            if (result?.data?.status === "success") {
                console.log(result?.data?.data)
                setData([result?.data?.data] )
            }
        })()
    }, [])
  
    return (
        <React.Fragment>
            <Header />

            <div className="distant"></div>
            <Container>
                {
                    data.length === 0 ? <span>Trống........</span>
                        :
                        <Row>
                            <Col lg={12} className="Store_Left">
                                <ShowComic data={data[0]} />
                            </Col>
                        </Row>
                }

            </Container>
            <div className="distant"></div>
            <BackToTop></BackToTop>
        </React.Fragment>
    );
}
export default React.memo(RentComic)