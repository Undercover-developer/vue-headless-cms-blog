import {getBlogPost, getBlogPosts} from '@/api/posts'

export const posts = {
    namespaced: true,
    state: {
        posts: [],
        post: {},
        page: 1,
        perPage: 10,
        loading: false,
        error: null
    },
    actions: {
        getPosts({ commit, state }) {
            commit("getPostsRequest");
            getBlogPosts(state.page, state.perPage)
                .then(
                    response => {
                        commit("getPostsSuccess", response.data);
                    },
                    error => {
                        commit("getPostsFailure", error);
                    }
                );
        },
        getPost({ commit }, id) {
            commit("getPostRequest");
            getBlogPost(id)
                .then(
                    response => {
                        commit("getPostSuccess", response.data);
                    },
                    error => {
                        commit("getPostFailure", error);
                    }
                );
        },
        loadMorePosts({ commit, state}) {
            commit("setPage");
            commit("getPostRequest");
            getBlogPosts(state.page, state.perPage)
                .then(
                    response => {
                        commit("loadMorePostsSuccess", response.data);
                    }
                );
        }
    },
    mutations: {
        getPostsRequest(state) {
            state.loading = true;
        },
        loadMorePostsSuccess(state, posts) {
            state.posts = [...state.posts, ...posts];
            state.loading = false;
        },
        getPostsSuccess(state, posts) {
            state.posts = posts;
            state.loading = false;
        },
        getPostsFailure(state, error) {
            state.error = error;
            state.loading = false;
        },
        getPostRequest(state) {
            state.loading = true;
        },
        getPostSuccess(state, post) {
            state.post = post;
            state.loading = false;
        },
        getPostFailure(state, error) {
            state.error = error;
            state.loading = false;
        },
        setPage(state) {
            state.page = state.page + 1;
        }


    },
    getters: {
        posts: state => state.posts,
        post: state => state.post,
        page: state => state.page,
        perPage: state => state.perPage,
        loading: state => state.loading,
        error: state => state.error
    }
}