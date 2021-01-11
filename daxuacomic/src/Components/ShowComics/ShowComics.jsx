import React from "react";
import { GoUnfold } from "react-icons/go";
import { BsChevronRight } from "react-icons/bs";
import { Container, Col, Row } from "react-bootstrap";
import ImageItem from "./ImageItem";
import { Link, Route, useHistory } from "react-router-dom";
import Loading from "../Comon/Loading";
import { Pagination } from '@material-ui/lab';
export default React.memo(function ShowComics({ props, data, numberOfResult, page, setStatePage }) {
  let history = useHistory();
  const handleChange = React.useCallback(async (event, value) => {
    setStatePage(value);
    history.push(`/?page=${value}`);
  }, [page])
  return (
    <div className="containerWrap">
      <div className="page-title">
        <h5>
          <GoUnfold />
          &#160;TRUYỆN MỚI CẬP NHẬT&#160;
          <BsChevronRight />
        </h5>
      </div>
      <div className="list_Stote">
        <Row>
          {
            data.length != 0 ?
              data.map((item) => {
                return (
                  <ImageItem
                    title={item.name}
                    key={item._id}
                    image={item.image}
                    alt={item.name}
                    id={item._id}
                    hot={item.hot}
                    views={item.views}
                  />
                )
              }) : <Loading></Loading>
          }
        </Row>
      </div>
      {  data.length != 0 ?
        <div className="pagination">
          <Pagination count={Math.floor(numberOfResult / 20)} color="secondary" shape="rounded" page={page} onChange={handleChange} showFirstButton showLastButton />
        </div> : <div></div>
      }
    </div>
  );
})
