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
import Loading from '../Comon/Loading'
const Search = (props) => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const { slug } = useParams()
    React.useEffect(() => {
        (async () => {
            let result = await searchComics(slug);
            if (result?.data?.status === "success") {
                setData(result?.data?.data)
                setLoading(true)
            }
      
        })()
    }, [])

    return (
        <React.Fragment>
            <Header />

            <div className="distant"></div>
            {

                <Container className={loading ? '' : "load"}>
                    {
                        loading ?
                            data.length != 0?
                                <Row>
                                    <Col lg={12} className="Store_Left">
                                        <ShowComic data={data} />
                                    </Col>
                                </Row>
                                :
                                <span>Chúng tôi không tìm thấy tên truyện {slug}</span>
                            : <Loading></Loading>
                    }
                </Container>
            }
            <div className="distant"></div>
            <BackToTop></BackToTop>
        </React.Fragment>
    );
}
export default React.memo(Search)