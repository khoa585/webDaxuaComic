import React from 'react';
import './CommentBox.scss';
import { AuthContext } from '../../../context/AuthContext'
import { PostComment, PostReplyComment } from '../../../api/Cmt'
import { useForm } from "react-hook-form";
import { AiOutlineSend } from "react-icons/ai";
import { toast } from 'react-toastify';
import {
    useHistory
} from "react-router-dom";
function CommentBox({ id, commentId }) {
    let history = useHistory();
    const { token, userData, isLoggedIn } = React.useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const [showSubmit, setSubmit] = React.useState(false);
    const hanlderChangeTextArena = (event) => {
        if (event.target.value.length !== 0) {
            setSubmit(true)
        } else {
            setSubmit(false)
        }
    }
    const onSubmit = async data => {
        if (isLoggedIn) {
            if (commentId) {
                const data_ = {
                    content: data.cmt,
                    IDuserReplies: userData.id,
                    IDCmt: commentId,
                }
                const result = await PostReplyComment(data_, token)
                if (result.data.status === "success") {
                    window.location.reload()
                }
            } else {
                const data_ = {
                    content: data.cmt,
                    IDuser: userData.id,
                    Idcomic: id,
                }
                const result = await PostComment(data_, token)
                if (result.data.status === "success") {
                    window.location.reload()
                }

            }
        } else {
            toast.error("Vui Lòng Đăng Nhập để tiếp tục")
            history.push("/login");
        }
    };
    return (
        <div className="container_comment">
            <div className="icon_container">
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="editor">
                    <textarea rows="4" onChange={hanlderChangeTextArena} placeholder="Nhập bình luận" name="cmt" ref={register} />
                    <button style={{
                        padding: "0px 20px",
                        background: "#00adff"
                    }} type="submit" disabled={!showSubmit}><AiOutlineSend></AiOutlineSend></button>
                </div>
            </form >
        </div>
    )
}
export default React.memo(CommentBox);




