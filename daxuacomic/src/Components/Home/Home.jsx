import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Background from "../Background/Background";
import "./style.scss";
import ShowComics from "../ShowComics/ShowComics";
import ViewComics from "../VisitedComics/ViewComics";
import Footer from "../Footer";
import BackToTop from "../Comon/BackToTop/BackToTop";
import {  useHistory } from "react-router-dom";
import { getListComic } from '../../api/comic'
import TopComics from "../TopComics/TopComics";
import Advertisement from "../Advertisement";
import Adob from '../Advertisement/Adob'
const Home = (props) => {
  const [data, setData] = React.useState({ data: [], numberOfResult: 0 })
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let [page, setPage] = React.useState(1)
  let history = useHistory();
  React.useEffect(() => {
    (async () => {
      handleShow()
      let { search } = history.location
      if (search != '') {
        page = parseInt(search.split('?page=')[1])
        setPage(page)
      }
      const result = await getListComic(page, 20);
      if (result?.data?.status === "success") {
        setData({
          "data": result?.data?.data,
          "numberOfResult": result?.data?.numberOfResult
        })
      }
    })()
  }, [page])
  const setStatePage = async (i) => {
    setPage(i)
  }


  return (
    <React.Fragment>
      <Header />
      <Background />
      <div className="distant"></div>
      <Container>
        <Row>
          <Col lg={9} className="Store_Left">
            <ShowComics data={data.data} page={page} numberOfResult={data.numberOfResult} setStatePage={(e) => setStatePage(e)} props={props} />
          </Col>
          <Col lg={3} className="Store_Right">
            <div className="right-side">
              <ViewComics />
            </div>
            <div className="comic-wrap">
              <div className="ModuleContent">
                <div className="tab-nav clearfix">
                  <TopComics></TopComics>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="distant"></div>
      <Footer></Footer>
      <BackToTop></BackToTop>
      <Advertisement {...{show,handleClose}}></Advertisement>
      <Adob></Adob>
    </React.Fragment>
  );
}
export default React.memo(Home)