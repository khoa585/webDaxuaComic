import React from 'react'
import { BsX } from "react-icons/bs";
import { Container, Col, Row } from "react-bootstrap";
const Item = ({ item, deleteItem }) => {
  const handleDelete = () => {
    deleteItem(item._id);
  };
  return (
    <Col lg={3} className="my-3" md={4} sm={6} xs={6}>
      <div className="list-Stote_" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{ textAlign: 'center' }}>
          <span className="thumb" title="">
            <img className="img-fluid" style={{ height: 200,width:'90%' }} src={item.comic_id.image} alt=""></img>
          </span>
        </div>
        <div className="list_Stote_r">
          <h6 className="title">
            <span>{item.comic_id.name}</span>
          </h6>
          <p className="chapter">
            <span>{item.name}</span>
            <span className="view pull-right">
              <BsX></BsX>
              <span className="visited-remove" onClick={handleDelete}>
                Xóa
            </span>
            </span>
          </p>
        </div>
      </div>
    </Col >
  );
};

export default Item;
