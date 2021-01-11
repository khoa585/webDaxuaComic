import React from "react";
import { Col } from "react-bootstrap";
import { BsFillEyeFill, BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { format } from '../../Common/FortmatView'
import { to_slug } from '../../Common/stringHelper'
import "./styles.scss";

const ImageItem = ({ image, alt, views, like, title, id, hot }) => {

  return (
    <Col lg={3} className="my-3" md={3} sm={4} xs={3}>
      <div className="item_Store">
        <Link to={`/truyen-tranh/${to_slug(title)}/${id}`}>
          <div className="image">
            <img className="img-fluid" src={image} alt={alt} />
            <div className="follow_View_Store">
              <span>
                <BsFillEyeFill />
                {parseInt(views) != null ? format(parseInt(views)) : 200}
              </span>
              <span>
                <BsFillHeartFill />
                {like != null ? format(parseInt(like) + Math.floor(Math.random() * 10) + 1) : 100}
              </span>
            </div>
            {
              hot === 1 ? (
                <div className="hot_trend">
                  <span> hot</span>
                </div>
              ) : <div></div>
            }

          </div>

        </Link>
        <div className="title_Item">
          <span className="jtip" data-jtip="#truyen-tranh-9929">

            <h6>{title}</h6>

          </span>

        </div>
      </div>
    </Col>
  );
};

export default React.memo(ImageItem);
