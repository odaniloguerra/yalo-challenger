const axios = require('axios').default;

const API_URL = "https://jsonplaceholder.typicode.com";

const paginate = (page, perPage = 10, data = []) => {
    const start = page * perPage;
    const end = start + perPage;

    return data.slice(start, end);
}

const listPosts = async (page, perPage) => {
    return await axios.get(`${API_URL}/posts`).then((res) => {
        return paginate(page, perPage, res.data);
    });
}

const listUsers = async () => {
    return axios.get(`${API_URL}/users`).then((res) => {
        return res.data;
    });
}

const getComments = async (postId) => {
    return axios.get(`${API_URL}/posts/${postId}/comments`).then((res) => {
        return res.data;
    });
}

module.exports = { listPosts, listUsers, getComments}