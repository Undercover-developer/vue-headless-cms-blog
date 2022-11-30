import {createRouter, createWebHistory} from 'vue-router'
import BlogHomePage from "@/pages/BlogHomePage.vue"
import BlogPostPage from "@/pages/BlogPostPage.vue"
import PageNotFound from "@/pages/PageNotFound.vue"

const routes = [
    {
        path: "/",
        component: BlogHomePage
    },
    {
        path: "/:id",
        component: BlogPostPage
    },
    {
        path: "/:pathMatch(.*)*",
        component: PageNotFound
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
}) 

export default router
