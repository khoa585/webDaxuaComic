import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Header from "../Header/Header";
import ShowComic from "./ShowComic";
import BackToTop from "../Comon/BackToTop/BackToTop";
import {
    useParams
} from "react-router-dom";
import { searchComics } from '../../api/comic'
import "../Home/style.scss";
const Search = (props) => {
    const [data, setData] = React.useState([])
    const { slug } = useParams()
    React.useEffect(() => {
        (async () => {
            let result = await searchComics(slug);
            console.log(result)
            if (result?.data?.status === "success") {
                setData(result?.data?.data)
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
                                <ShowComic data={data} />
                            </Col>
                        </Row>
                }

            </Container>
            <div className="distant"></div>
            <BackToTop></BackToTop>
        </React.Fragment>
    );
}
export default React.memo(Search)