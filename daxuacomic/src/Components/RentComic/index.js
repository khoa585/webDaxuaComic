import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Header from "../Header/Header";
import ShowComic from "./ShowComic";
import BackToTop from "../Comon/BackToTop/BackToTop";
import { getListComicRemd } from '../../api/comic'
import "../Home/style.scss";
import { AuthContext } from "../../context/AuthContext";
const RentComic = (props) => {
    const [data, setData] = React.useState([])
    const { token} = React.useContext(AuthContext);
    React.useEffect(() => {
        (async () => {
            if (token) {
                let result = await getListComicRemd(token);
                if (result?.data?.status === "success") {
                    console.log(result?.data?.data)
                    setData([result?.data?.data])
                }
            }
        })()
    }, [token])

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