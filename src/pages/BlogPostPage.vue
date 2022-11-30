<template>
    <div class="BlogPostPage">
        <blog-header></blog-header>
        <div class="BlogPostPage__content" v-if="Object.keys(post).length">
            <div class="BlogPostPage__content__header">
                <span class="BlogPostPage__content__header-author">
                    By {{ post._embedded.author[0].name }}
                </span>
                <span class="BlogPostPage__content__header-time">
                    {{ timeSince(post.date) }}
                </span>
            </div>
            <div class="BlogPostPage__content__title">
                <h1>{{ post.title.rendered }}</h1>
            </div>
            <div class="BlogPostPage__content__body">
                <div class="BlogPostPage__content__body__image">
                    <img :src="post.jetpack_featured_media_url" alt="blog image">
                </div>
                <div class="BlogPostPage__content__body__text" v-html="post.content.rendered">
                </div>
            </div>
        </div>
        <div class="grid-row" v-if="!Object.keys(post).length">
            <div class="grid-column-12">
            <div class="BlogHomePage__content__loader-icon">
                <loader-icon></loader-icon>
            </div>
            </div>
        </div>
        <div class="BlogPostPage__footer">
            <div class="BlogPost_footer__title">
                <h1>More Articles</h1>
            </div>
            <div class="BlogPost_footer__content" v-if="posts.length">
                <div class="grid-row">
                    <div class="grid-column-lg-4 grid-column-md-6 grid-column-sm-12"  v-for="post in posts.slice(1, 4)" :key="post.id">
                        <blog-card-mini
                            :id="post.id"
                            :title="post.title.rendered"
                            :description="post.excerpt.rendered"
                            :image="post.jetpack_featured_media_url"
                            :date="post.date"
                            :category="post.primary_category.slug"
                            :readTime="post.jetpack_publicize_message"
                        ></blog-card-mini>
                    </div>   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogHeader from '../components/common/BlogHeader.vue'
import BlogCardMini from '@/components/common/BlogCardMini.vue';
import LoaderIcon from '../components/common/Loader.vue'
import { mapGetters, mapActions } from 'vuex';
import { timeSince } from '@/helpers/date_time_formater';
export default {
    name: 'BlogPostPage',
    components: { BlogHeader, BlogCardMini, LoaderIcon },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getPost(to.params.id);
        });
    },
    beforeUpdate(){
        this.getPost(this.$route.params.id);
        if(this.posts.length === 0){
            this.getPosts();
        }
    },
    computed: {
        ...mapGetters('posts',['post', 'posts', 'loading'])
    },
    methods: {
        ...mapActions('posts',['getPost', 'getPosts']),
        timeSince
    },
}
</script>

<style lang="scss">
    .BlogPostPage {
        background: #FFF;
        padding-left: 5rem;
        padding-right: 5rem;
        &__content{
            padding-top: 5rem;
        
            &__header {
                display: inline-flex;
                flex-wrap: wrap;
                column-gap: 0.7rem;
                margin-bottom: 1rem;
                &-author {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    color: #4B4B4B;
                }
                &-time {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 16px;
                    color: #6E6E6E;
                }
            }
            &__title {
                h1 {
                    font-style: normal;
                    font-weight: 900;
                    font-size: 34px;
                    line-height: 38px;
                    color: #2C2C2C;
                    margin-bottom: 0.7rem;
                }
            }
            &__body {
                &__image {
                    margin-bottom: 1rem;
                    text-align: center;
                    img {
                        width: 85%;
                        object-fit: cover;
                        border-radius: 3px;
                    }
                }
                &__text {
                    p {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1rem;
                    line-height: 1.6rem;
                    color: #6E6E6E;
                    margin-bottom: 1rem;
                }
                }
            }
        }
        &__footer {
            padding-top: 5rem;
            &__title {
                h1 {
                    font-style: normal;
                    font-weight: 900;
                    font-size: 24px;
                    line-height: 29px;
                    color: #2C2C2C;
                }
            }
            &__content {
                padding-top: 2rem;
            }
        }

        @media (max-width: 1024px) {
            padding-left: 1rem;
            padding-right: 1rem;
        }
    }
</style>