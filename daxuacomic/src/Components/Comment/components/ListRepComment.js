import React from 'react';
import './DetialComment.scss';
import { BsChevronDown, BsShieldShaded } from "react-icons/bs";

function ListRepComment({ list }) {
    console.log(list)
    return list.map((task, index) => {
        return (
            <div className="repCmt" key={index}>
                <div className="authorImg">
                    <img
                        src="https://1.bp.blogspot.com/-m3UYn4_PEms/Xnch6mOTHJI/AAAAAAAAZkE/GuepXW9p7MA6l81zSCnmNaFFhfQASQhowCLcBGAsYHQ/s1600/Cach-Lam-Avatar-Dang-Hot%2B%25281%2529.jpg"
                        alt="logo"
                    ></img>
                </div>
                <div className="detailAuthorCmt">
                    <div>
                        <div className="author">
                            <span className="member"><BsShieldShaded></BsShieldShaded>&nbsp;Thành Viên</span>&nbsp;
                                        <span className="createdAt">{task.createdAt}</span>
                            <div>
                                <span className="authorName">{task.content}</span>
                                <span className="authorCmt">{task.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

}
export default React.memo(ListRepComment);