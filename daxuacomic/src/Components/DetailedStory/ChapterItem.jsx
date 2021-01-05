import React from "react";
import { Link } from "react-router-dom";
import { to_slug } from "../../Common/stringHelper";
import { showTimeAgo } from '../../Common/timeHelper';
import { Row, Col } from 'react-bootstrap';
const ChapterItem = ({ chapter, slug }) => {

  return (
    <Row className="row item_chap">
      <Col className="chapter" lg={9} md={9} sm={9} xs={9}>
        <Link to={`/doc-truyen/${to_slug(slug)}/${to_slug(chapter.name)}/${chapter._id}`}>
          <span>{chapter.name}</span>
        </Link>
      </Col>
      <Col className="col-lg-3" lg={3} md={3} sm={3} xs={3}>
        <span>{showTimeAgo(chapter.createdAt)}</span>
      </Col>
    </Row>
  );
};

export default React.memo(ChapterItem);
