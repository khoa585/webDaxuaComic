import axios_ from "./axiosLaravel";
export const PostComment = (data, token) => {
    return axios_.post(`/api/cmt/create`, {
        content: data.content,
        IDuser: data.IDuser,
        Idcomic: data.Idcomic,
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};
export const getListCmt = (id, token) => {
    return axios_.get(`/api/cmt/getCommentsByComic/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};
export const PostReplyComment = (data, token) => {
    return axios_.post('/api/cmt/reply/create', {
        content: data.content,
        IDuserReplies: data.IDuserReplies,
        IDCmt: data.IDCmt
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};