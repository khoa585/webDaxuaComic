import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.scss';
function Footer(props) {
    return (
        <React.Fragment>
            <div className="footerBottom">
                <Container>
                    <div className="footerContent">
                        <h4>TruyenTranh.24</h4>
                        <span>Copyright © 2015 TruyenTranh.24</span>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default React.memo(Footer);