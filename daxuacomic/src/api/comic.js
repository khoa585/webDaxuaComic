import axios from "./axios";
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