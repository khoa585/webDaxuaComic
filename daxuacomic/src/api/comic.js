import axios from "./axios";
import axios_ from "./axiosLaravel";
export const getListComic = (page = 1, numberItem = 20) => {
    return axios.post("/api/comic/list", {
        page: page,
        numberLimit: numberItem,
    });
};
export const getlistAllComic = () => {
    return axios.post("/api/comic/listAll");
};

export const deleteComicById = (id) => {
    return axios.post(`api/comic/delete/${id}`);
};


export const getDetailComic = (comicId) => {
    return axios.get(`/api/comic/detail/${comicId}`);
};
export const getListHotComics = (type = 1) => {
    return axios.post("/api/comic/list-top", {
        type: type,
    });
};
export const getAddRent = (id, data, token) => {
    return axios_.post(`/api/cart/add/${id}`, {
        user: data.user,
        email: data.email,
        comicId: data.comicId,
        ngayHetHanThue: data.ngayHetHanThue,
        image: data.image,
        Views: data.Views,
        price:data.price,
        nameComic: data.nameComic
    }, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};
export const getListComicRemd = (token) => {
    return axios_.get("/api/cart/show", {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};
export const getlistbuysid = (id,token) => {
    return axios_.get(`/api/cart/getlistbuysid/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
};
// export const searchComics = (name,token) => {
//     return axios.post("/api/comic/search", {
//         name
//     },{
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     });
// };
export const searchComics = (name) => {
    return axios.post("/api/comic/search", {
        name
    });
};