import { createStore } from 'vuex'
import { posts } from './modules/posts'

export const store = createStore({
    modules: {
        posts
    }
})
