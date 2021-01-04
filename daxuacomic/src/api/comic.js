import axios from "./axios";
import axios_ from "./axiosLaravel";
export const getListComic = (page = 1, numberItem = 20) => {
    return axios.post("/api/comic/list", {
        page: page,
        numberLimit: numberItem,
    });
};

export const getDetailComic = (comicId) => {
    return axios.get(`/api/comic/detail/${comicId}`);
};
export const getListHotComics = (type = 1) => {
    return axios.post("/api/comic/list-top", {
        type: type,
    });
};
export const getAddRent = (id, data) => {
    return axios_.post(`/api/cart/add/${id}`, {
        user: data.user,
        email: data.email,
        comicId: data.comicId,
        ngayHetHanThue: data.ngayHetHanThue,
        image: data.image,
        Views: data.Views,
        nameComic: data.nameComic
    });
};
export const getListComicRemd = () => {
    return axios_.get("/api/cart/show",);
};

export const searchComics = (name) => {
    return axios.post("/api/comic/search", {
        name
    });
};