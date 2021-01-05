import React from "react";
import { GoUnfold } from "react-icons/go";
import { BsChevronRight } from "react-icons/bs";
import { Container, Col, Row } from "react-bootstrap";
import ImageItem from "./../ShowComics/ImageItem";
import { Link, Route, useHistory } from "react-router-dom";
import Loading from "../Comon/Loading";

export default React.memo(function ShowComic({ data }) {
    return (
        <div className="containerWrap">
            <div className="page-title">
                <h5>
                    <GoUnfold />
          &#160;Tim kiem&#160;
          <BsChevronRight />
                </h5>
            </div>
            <div className="list_Stote">
                <Row style={{ width: '100%' }}>
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
                                        views={item.views}
                                    />
                                )
                            }) : <Loading></Loading>
                    }
                </Row>
            </div>

        </div>
    );
})
