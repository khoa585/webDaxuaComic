import React from "react";
import Modal from 'react-bootstrap/Modal'
import { AiFillCloseCircle } from "react-icons/ai";
import './style.scss'
function Abod() {
    const [hidden, setState] = React.useState(true)
    return (
        <div className="adobWrap">
            {
                hidden ? (
                    <div className="conatiner">
                        <AiFillCloseCircle onClick={()=>setState(false) }></AiFillCloseCircle>
                        <img
                            src="https://cdn.tgdd.vn/Files/2020/04/18/1249986/lmht_800x450.jpg"
                            alt="logo"

                            className="img"
                        ></img>
                    </div>
                ) : <></>
            }
        </div>
    );
}
export default Abod