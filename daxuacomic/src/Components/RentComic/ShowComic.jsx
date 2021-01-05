import React from "react";
import { GoUnfold } from "react-icons/go";
import { BsChevronRight } from "react-icons/bs";
import { Container, Col, Row } from "react-bootstrap";
import ImageItem from "./ImageItem";
import { Link, Route, useHistory } from "react-router-dom";
import Loading from "../Comon/Loading";

export default React.memo(function ShowComic({ data }) {

    return (
        <div className="containerWrap">
            <div className="page-title">
                <h5>
                    <GoUnfold />
          &#160;TRUYỆN THUÊ&#160;
          <BsChevronRight />
                </h5>
            </div>
            <div className="list_Stote">
                <Row style={{ width: '100%' }}>
                    {
                        data.length != 0 ?
                            data.map((item,index) => {
                                return (
                                        <ImageItem
                                            title={item.nameComic}
                                            key={item.comicId}
                                            image={item.image}
                                            alt={item.nameComic}
                                            id={item.comicId}
                                            views={item.Views}
                                        />
                                )
                            }) : <Loading></Loading>
                    }
                </Row>
            </div>

        </div>
    );
})
