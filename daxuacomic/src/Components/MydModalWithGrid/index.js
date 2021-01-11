import React from "react";
import Modal from 'react-bootstrap/Modal'
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import './styles.scss'
import { AuthContext } from "../../context/AuthContext";
import { getAddRent } from '../../api/comic'
import { toast } from 'react-toastify';
import moment from "moment";
import { showTimeAgo } from '../../Common/timeHelper';
import { format } from '../../Common/FortmatView';
import {
    useHistory
} from "react-router-dom";
function MydModalWithGrid(props) {
    let history = useHistory();
    const { token, isLoggedIn, userData } = React.useContext(AuthContext);
    const { data, dataRent } = props
    const checkday = () => {
        return moment().add(30, 'days').calendar();
    }
    const OnPressRent = async () => {

        if (!isLoggedIn) {
            toast.error("Vui Lòng Đăng Nhập để tiếp tục")
            history.push("/login");
        }
        const data_ = {
            user: userData.id,
            email: userData.email,
            comicId: data._id,
            ngayHetHanThue: checkday(),
            image: data.image,
            Views: data.views,
            nameComic: data.name,
            price: data.price
        }

        const resulit = await getAddRent(data._id, data_, token)
        if (resulit?.data.status === "success") {
            toast.success("Thành Công")
            window.location.reload()
        } else {
            toast.error("Lỗi")
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
                        {data.name ? data.name : data.nameComic}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container className="containerWrapper_">

                        <div className="image_Store">
                            <img className="img-fluid" src={data.image} />
                        </div>
                        <span style={{ padding: 10 }}> {data.name ? data.name : data.nameComic}</span>
                        <div className="price">
                            <span>{format(data.price)} vnđ/Tháng</span>
                        </div>
                        {
                            dataRent.data.length === 0 && dataRent.status === false ? (
                                <div className="price">
                                    <span>Miễn phí</span>
                                </div>
                            ) : !dataRent.status && dataRent.data.ngayHetHanThue ? (
                                <div className="price">
                                    <span>Ngày hết hạn: {showTimeAgo(dataRent.data.ngayHetHanThue)}</span>
                                </div>
                            ) : (<></>)
                        }

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    {
                        dataRent.status ? <Button variant="success" onClick={OnPressRent}>Thuê</Button>
                            : <Button variant="success" onClick={OnPressRent}>Gia Hạn</Button>
                    }

                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}
export default MydModalWithGrid