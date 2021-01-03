import React from "react";
import Header from "../Header/Header";
import "../Home/style.scss";
import { Container, Col, Row } from "react-bootstrap";
import { BsFileEarmarkText, BsCardList } from "react-icons/bs";
import { TiPlus } from "react-icons/ti";
import {
  BsChevronRight,
  BsFillPersonFill,
  BsTagFill,
  BsWifi,
  BsEyeFill,
  BsFillStarFill,
  BsHeart,
} from "react-icons/bs";
import "./style.scss";
import Footer from "../Footer";
import TopComics from "../TopComics/TopComics";
import { Link, useLocation, useParams } from "react-router-dom";
import { getDetailComic } from '../../api/comic'
import ChapterItem from ".//ChapterItem";
import BackToTop from "../Comon/BackToTop/BackToTop";
import Loading from "../Comon/Loading";
export default React.memo(function DetailedStory(props) {
  const [data, setData] = React.useState([])
  const { id ,slug} = useParams()
  const [end, setEnd] = React.useState(10);
  let start = 0;
  React.useEffect(() => {
    (async () => {
      const result = await getDetailComic(id);
      if (result?.data?.status === "success") {
        setData(result?.data?.data)
      }
    })()
  }, [])
  const showGenres = () => {
    return data.genres?.map((item, index) => {
      return (
        <span className="button_genres" key={index}>
          {item}
        </span>
      )
    })
  }
  const addChap = React.useCallback(() => {
    setEnd((prve) => prve + 10)
  }, [])

  return (
    <>
      <header className="header">
        <Header></Header>
      </header>
      {
        data.length != 0 ?
          <div className="container_Detail">
            <div className="distant_Comics"></div>
            <Container className="detail_Comics">
              <Row>
                <Col lg={8} className="container_lg">
                  <div className="title_Menu">
                    <div className="title_comics">
                      <li className="itemListElement">
                        <span>Trang chủ</span>&#160;
                  <BsChevronRight></BsChevronRight>
                      </li>
                      <li className="itemListElement">
                        <span>Thể loại</span>&#160;
                  <BsChevronRight></BsChevronRight>
                      </li>
                      <li className="itemListElement">
                        <span>Tên Truyện</span>
                      </li>
                    </div>
                  </div>
                  <div className="detail-info">
                    <div className="name_Story">
                      <h4>{data.name}</h4>
                      <span>Đánh giá: 9.1/10 từ 44061 lượt</span>
                    </div>
                    <Container className="content_Story">
                      <Row>
                        <Col lg={4}>
                          <div className="image_Store">
                            <img className="img-fluid" src={data.image} />
                          </div>
                        </Col>
                        <Col lg={8} className="list_Comics">
                          <div className="list_Info">
                            <div>
                              <Row className="author row">
                                <Col className="name col-lg-4" lg={4} md={4} sm={4} xs={4}>
                                  <BsFillPersonFill></BsFillPersonFill>
                           &#160; Tác
                           giả
                           </Col>
                                <Col className="status_ col-lg-8" lg={8} md={8} sm={8} xs={8}>
                                  {!data.status ? "Đang cập nhật" : "Đã hoàn tất"}
                                </Col>
                              </Row>
                              <Row className="status row">
                                <Col className="name col-lg-4" lg={4} md={4} sm={4} xs={4}>
                                  <BsWifi></BsWifi>
                           &#160; Tình trạng
                           </Col>
                                <Col className="status_ col-lg-8" lg={8} md={8} sm={8} xs={8}>
                                  Đang tiến hành</Col>
                              </Row>
                              <Row>
                                <Col className="name col-lg-4" lg={4} md={4} sm={4} xs={4}>
                                  <BsTagFill></BsTagFill>
                           &#160; Thể loại
                           </Col>
                                <Col className="status_ col-lg-8 show_genres" lg={8} md={8} sm={8} xs={8}>
                                  {showGenres()}
                                </Col>
                              </Row>
                              <Row className="row">
                                <Col className="name col-lg-4" lg={4} md={4} sm={4} xs={4}>
                                  <BsEyeFill></BsEyeFill>
                           &#160; Lượt xem
                           </Col>
                                <Col className="status_ col-lg-8" lg={8} md={8} sm={8} xs={8}>
                                  {data.views}</Col>
                              </Row>
                            </div>
                            <div className="follow row">
                              <div className="read-action mrt10">
                              </div>
                              <div className="read-action mrt10">
                            
                                  <span className="btn btn-warning mrb5">
                                    {" "}
                           Đọc từ đầu
                           </span>
                        
                                <span className="btn btn-warning mrb5">
                                  {" "}
                           Đọc mới nhất
                           </span>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <div className="content_detail">
                    <div>
                      <h5 className="list-title">
                        <BsFileEarmarkText></BsFileEarmarkText>
                  &#160; Nội dung
               </h5>
                    </div>
                    <div>
                      <p>{data.description}</p>
                    </div>
                  </div>
                  <div className="list_Chapter">
                    <div>
                      <h5 className="list-title">
                        <BsCardList></BsCardList>
                  &#160; DANH SÁCH CHƯƠNG
               </h5>
                    </div>
                    <div className="listAll_Chapter">
                      <Row className="row head_Chap">
                        <Col className="col-lg-9 wrap_Tex" lg={9} md={9} sm={9} xs={9}>
                          <span>Số chương</span>
                        </Col>
                        <Col className="col-lg-3 wrap_Tex" lg={3} md={3} sm={3} xs={3}>
                          <span>Lượt xem</span>
                        </Col>
                      </Row>
                      {
                        data.chapters.slice(start, end).map((chapter) => (
                          <ChapterItem chapter={chapter} slug={slug} key={chapter._id} />
                        ))
                      }
                    </div>
                    <div className="viewsAdd">
                      {
                        end <= data.chapters.length ?
                          <button type="button" className="btn btn-link" onClick={addChap}>
                            <TiPlus></TiPlus>
                              &#160;Xem thêm
                          </button>
                          :
                          <div />
                      }
                    </div>
                  </div>
                  <div className="comment_comic">
                    {/* <Comment {...{ comicId: data._id, asPath }} /> */}
                  </div>
                </Col>
                <Col lg={4}>
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
          </div> : <div style={{ height: '100vh', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
            <Loading></Loading>
          </div>
      }
      <BackToTop></BackToTop>
      <Footer></Footer>
    </>
  );
})