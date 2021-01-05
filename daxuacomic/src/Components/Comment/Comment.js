import React, { useState } from 'react';
import { BsChatDots } from "react-icons/bs";
import './Comment.scss';
import CommentBox from './components/CommentBox'
import { AuthContext } from '../../context/AuthContext'
import DetialComment from './components/DetialComment'
import { getListCmt } from '../../api/Cmt'
function Comment({ id }) {
    const { token, isLoggedIn } = React.useContext(AuthContext);
    let [comments, setComments] = useState([]);
    React.useEffect(() => {
        (async () => {
            if (isLoggedIn) {
                const result = await getListCmt(id, token)
                if (result.data.status === "success") {
                    setComments(result.data.data)
                }
            }

        })()
        return () => {
            setComments([])
        }
    }, [isLoggedIn])

    const showDetialComment = () => {
        return comments.map((item, index) => {
            return <DetialComment key={index} {...{ item, id }} />
        })
    }

    return (
        <>
            <div className="comment_container">
                <div className="titleCmt">
                    <BsChatDots></BsChatDots>
               &nbsp;<h5>Comment</h5>
                </div>
                <CommentBox {...{ id }}></CommentBox>
                <div>
                    {comments.length !== 0 ? showDetialComment() : <></>}
                </div>
            </div>
        </>
    )
}
export default Comment;