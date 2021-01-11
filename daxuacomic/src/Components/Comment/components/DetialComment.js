import React from 'react';
import './DetialComment.scss';
import { BsChevronDown, BsShieldShaded } from "react-icons/bs";
import CommentBox from './CommentBox'
import ListRepComment from './ListRepComment'


function DetialComment({ item, id }) {
    const [isStatus, setStatus] = React.useState(false)
    const clickReply = () => {
        setStatus((prev) => !prev)
    }
    return (
        <>
            <div className="ContainerCmt">
                <div className="ContainerCmt_">
                    <div className="authorImg">
                        <img
                            src="https://1.bp.blogspot.com/-m3UYn4_PEms/Xnch6mOTHJI/AAAAAAAAZkE/GuepXW9p7MA6l81zSCnmNaFFhfQASQhowCLcBGAsYHQ/s1600/Cach-Lam-Avatar-Dang-Hot%2B%25281%2529.jpg"
                            alt="logo"
                        ></img>
                    </div>
                    <div className="detailAuthorCmt">
                        <div className="AuthorAction">

                            <div className="author">
                                <span className="member"><BsShieldShaded></BsShieldShaded>&nbsp;Thành Viên</span>
                                <div>
                                    <span className="authorName">{item.name}</span>
                                    <span className="authorCmt">{item.content}</span>
                                </div>
                            </div>
                            <div className="statusCmt">
                                <li className="reply">
                                    <span onClick={clickReply}>Trả lời</span>
                                </li>
                                <li> {item.createdAt}</li>
                            </div>
                        </div>

                    </div>
                </div>
                {
                    isStatus ?
                        <div className="container_">
                            {
                                item.reply.length != 0 ?
                                    <ListRepComment list={item.reply} id={id}></ListRepComment> : null
                            }

                            <div className="Inputcmt">
                                <div className="authorImg">
                                    <img
                                        src="https://1.bp.blogspot.com/-m3UYn4_PEms/Xnch6mOTHJI/AAAAAAAAZkE/GuepXW9p7MA6l81zSCnmNaFFhfQASQhowCLcBGAsYHQ/s1600/Cach-Lam-Avatar-Dang-Hot%2B%25281%2529.jpg"
                                        alt="logo"
                                    ></img>
                                </div>

                                <div className="inputtxt">
                                    <CommentBox  {...{ id, commentId: item.id }}></CommentBox>
                                </div>
                            </div>
                        </div> : <div />
                }
            </div>

        </>
    )
}
export default React.memo(DetialComment);