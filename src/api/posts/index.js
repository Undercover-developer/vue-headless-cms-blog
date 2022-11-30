import httpClient from "../httpClient";
const END_POINT = "posts";

const getBlogPosts = (page, perPage,) => {
    return httpClient.get(`${END_POINT}?page=${page}&per_page=${perPage}`);
};

const getBlogPost = (id) => {
    return httpClient.get(`${END_POINT}/${id}?_embed`);
}

export {
    getBlogPosts,
    getBlogPost
}