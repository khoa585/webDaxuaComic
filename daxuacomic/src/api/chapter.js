import axios from './axios';
export const detialChapter = (idChapter) => {
    return axios.get("/api/chapter/detail/" + idChapter);
}