import React, { useState, useEffect } from "react";
import "./comment.scss";
function Comment() {
    // const [listComment, setListComment] = useState([]);
    const listComment = [
        {
            "_id": '1',
            "name": "Sirin",
            "content" : "Có vẻ như ohta phải chuyển nhà và họ phải chia tay",
            'imgae':'https://s.truyenchon.com/Data/SiteImages/anonymous.png',
            "namechap" :"Chuyện tình tuổi học trò"
        },
        {
            "_id": '2',
            "name": "yuri iz da bezt",
            "content" : "ảnh cuối có khi nào đệ tử main xuyên ko mọi người",
            'imgae':'https://s.truyenchon.com/Data/SiteImages/anonymous.png',
            "namechap" :"Maou-jou de Oyasumi"
        }
    ]
    const showListComment = () => {
        return listComment.map(comment => {
            return (
                <div key={comment._id}>
                    <div className="home_comment">
                        <div className="header_comment">
                            <h3 className="title">
                                <span>
                                {comment.namechap}
                                </span>
                            </h3>
                            <div className="chapter_show_comment">
                                {/* {comment.chapter?._id ? <Link route={`/doc-truyen/${to_slug(comment.comic?.name)}-${to_slug(comment.chapter?.name)}.${comment.chapter?._id}`} >
                                    <a>{comment.chapter.name.slice(0, comment.chapter.name.indexOf(":") > 0 ? comment.chapter.name.indexOf(":") : comment.chapter.name.length)}</a>
                                </Link> : null} */}
                            </div>
                        </div>
                        <div className="flex_css">
                            <div className="image_user">
                                <img src={comment.imgae} />
                            </div>
                            <div className="user_comment_info">
                                <div className="flex_css">
                                    <div className="user_name">
                                        {comment.name}
                                    </div>
                                    <div className="time_comment">
                                        {/* <ClockCircleOutlined /> <span className="time">{showTimeAgo(comment.createdAt)}</span> */}
                                    </div>
                                </div>
                                <div className="content_chat">
                                    {comment.content}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div>
            {showListComment()}
        </div>
    )
}
export default React.memo(Comment);