import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.scss';
function Footer(props) {
    return (
        <React.Fragment>
            <div className="footerBottom">
                <Container>
                    <div className="footerContent">
                        <h4>DUMMIES.24</h4>
                        <span>T1 LCK</span>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default React.memo(Footer);