import React from "react";
import Modal from 'react-bootstrap/Modal'
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import './styles.scss'
import { AuthContext } from "../../context/AuthContext";
import { getAddRent } from '../../api/comic'
import { toast } from 'react-toastify';
import moment from "moment";
function MydModalWithGrid(props) {
    const { isLoggedIn, userData } = React.useContext(AuthContext);
    const { data } = props

    const checkday = () => {
        return moment().add(30, 'days').calendar();
    }
    console.log(data)
    const OnPressRent = async () => {

        if (!isLoggedIn) {
            toast.error("Vui Lòng Đăng Nhập để tiếp tục")
            return
        }
        const data_ = {
            user: userData.id,
            email: userData.email,
            comicId: data._id,
            ngayHetHanThue: checkday(),
            image:data.image,
            Views:data.views,
            nameComic : data.name
        }
   
        const resulit = await getAddRent(data._id,data_)
        if(resulit?.data.status === "success"){
            toast.success("Thuê Thành Công")
        }
    }
    return (
        <React.Fragment
        >
            <Modal {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {data.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container className="containerWrapper_">

                        <div className="image_Store">
                            <img className="img-fluid" src={data.image} />
                        </div>
                        <span style={{ padding: 10 }}>{data.name}</span>
                        <div className="price">
                            <span>200,000 vnđ/1Thang</span>
                        </div>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={OnPressRent}>Thuê</Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}
export default MydModalWithGrid