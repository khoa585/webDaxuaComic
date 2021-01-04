import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Header from "../Header/Header";
import Background from "../Background/Background";
import "./style.scss";
import ShowComics from "../ShowComics/ShowComics";
import ViewComics from "../VisitedComics/ViewComics";
import Comment from "../Comment/Comment";
import Footer from "../Footer";
import BackToTop from "../Comon/BackToTop/BackToTop";
import { Link, Route, useHistory } from "react-router-dom";
import { getListComic, searchComics } from '../../api/comic'

import TopComics from "../TopComics/TopComics";
const Home = (props) => {
  const [data, setData] = React.useState({ data: [], numberOfResult: 0 })

  let [page, setPage] = React.useState(1)
  let history = useHistory();
  React.useEffect(() => {
    (async () => {
      let { search } = history.location
      if (search != '') {
        page = parseInt(search.split('?page=')[1])
        setPage(page)
      }
      let result = await getListComic(page, 20);
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
      <Header  />
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
            <div className="new-comments">
              <div className="ModuleContent">
                <div className="darkBox">
                  <h6>Bình luận mới</h6>
                  <Comment></Comment>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="distant"></div>
      <Footer></Footer>
      <BackToTop></BackToTop>
    </React.Fragment>
  );
}
export default React.memo(Home)