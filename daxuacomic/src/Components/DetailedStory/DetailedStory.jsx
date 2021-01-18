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
} from "react-icons/bs";
import "./style.scss";
import Footer from "../Footer";
import TopComics from "../TopComics/TopComics";
import { Link, useParams } from "react-router-dom";
import { getDetailComic, getlistbuysid } from '../../api/comic'
import ChapterItem from ".//ChapterItem";
import BackToTop from "../Comon/BackToTop/BackToTop";
import Loading from "../Comon/Loading";
import { AuthContext } from '../../context/AuthContext'
import MydModalWithGrid from "../MydModalWithGrid";
import { format } from '../../Common/FortmatView'
import { to_slug } from '../../Common/stringHelper'
import Comment from '../Comment/Comment'
export default React.memo(function DetailedStory(props) {
  const { token, isLoggedIn } = React.useContext(AuthContext);
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = React.useState([])
  const { id, slug } = useParams()
  const [end, setEnd] = React.useState(10);
  const [loading, setloading] = React.useState(false);
  const [dataRent, setRent] = React.useState({
    status: true,
    data: []
  })
  let start = 0;

  React.useEffect(() => {
    (async () => {
      setloading(true)
      if (isLoggedIn) {
        const [result, data] = await Promise.all([getDetailComic(id), getlistbuysid(id, token)])
     
        if (result?.data?.status === "success") {
          setData(result?.data?.data)
          setRent({
            status: result?.data?.data.rent,
            data: []
          })
        }
        if (!(data.data.message === "")) {
          if (data.data.data.comicId === id) {
            setRent({
              status: false,
              data: data.data.data
            })
          }
        }
        setloading(false)
      } else {
        let result = await getDetailComic(id)
        if (result?.data?.status === "success") {
          setData(result?.data?.data)
          setRent({
            status: result?.data?.data.rent,
            data: []
          })
          setloading(false)

        }
      }
    })()
  }, [isLoggedIn])

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
        !loading ?
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
                              <Row className="status row">
                                <Col className="name col-lg-4" lg={4} md={4} sm={4} xs={4}>
                                  <BsWifi></BsWifi>
                           &#160; Team dịch
                           </Col>
                                <Col className="status_ col-lg-8" lg={8} md={8} sm={8} xs={8}>
                                  {data.team}</Col>
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
                                  {format(data.views)}</Col>
                              </Row>
                            </div>
                            <div className="follow row">
                              <div className="read-action mrt10">
                              </div>
                              <div className="read-action mrt10">
                                {
                                  !dataRent.status ?
                                    <Link to={`/doc-truyen/${to_slug(data.name)}/${to_slug(data.chapters[0].name)}/${data.chapters[0]._id}`}>
                                      <span className="btn btn-warning mrb5">
                                        Đọc
                           </span> </Link> : <></>
                                }

                                {
                                  dataRent.status ?
                                    <span onClick={() => setModalShow(true)} className="btn btn-warning mrb5">
                                      Thuê
                         </span> : dataRent.data.length === 0 ? <span className="btn btn-warning mrb5">
                                      Miễn Phí đọc
                         </span> : <span onClick={() => setModalShow(true)} className="btn btn-warning mrb5">
                                        Đã Thuê
                         </span>
                                }

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

                  {
                    !dataRent.status ?
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
                      : <></>
                  }
                  <div className="comment_comic">
                    <Comment
                      id={id}
                    />
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
      <MydModalWithGrid
        show={modalShow}
        data={data}
        dataRent={dataRent}
        onHide={() => setModalShow(false)}

      ></MydModalWithGrid>
    </>
  );
})