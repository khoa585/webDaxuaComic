import React from "react";
import Modal from 'react-bootstrap/Modal'
import { Container } from "react-bootstrap";

function Advertisement({ show, handleClose }) {
    return (
        <React.Fragment
        >
            <Modal
                onHide={handleClose}
                style={{ zIndex: '999999999' }}
                show={show}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Quảng cáo
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid" style={{ padding: 0 }}>
                    <img
                        src="https://cdn.tgdd.vn/Files/2020/04/18/1249986/lmht_800x450.jpg"
                        alt="logo"
                        style={{
                            width: '100%',
                            height: '100%',
                        }}

                    ></img>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}
export default Advertisement