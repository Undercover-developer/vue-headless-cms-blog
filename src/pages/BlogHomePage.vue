<template>
  <div class="BlogHomePage">
    <blog-header></blog-header>
    <div class="BlogHomePage__content">
      <div class="grid-row">
        <div class="grid-column-12">
          <blog-card-large
            v-if="posts.length"
            :id="posts[0].id"
            :title="posts[0].title.rendered"
            :description="posts[0].excerpt.rendered"
            :image="posts[0].jetpack_featured_media_url"
            :date="posts[0].date"
            :category="posts[0].primary_category.slug"
            :readTime="posts[0].jetpack_publicize_message"
          ></blog-card-large>
        </div>
      </div>
      <div class="grid-row">
        <div class="grid-column-lg-4 grid-column-md-6 grid-column-sm-12" v-for=" post in posts.slice(1, posts.length)" :key="post">
          <blog-card-mini
            :id="post.id" :title="post.title.rendered"
            :description="post.excerpt.rendered" :image="post.jetpack_featured_media_url" :date="post.date"
            :category="post.primary_category.slug" :readTime="post.jetpack_publicize_message"></blog-card-mini>
        </div>
      </div>
      
      <div class="grid-row" v-if="loading">
        <div class="grid-column-12">
          <div class="BlogHomePage__content__loader-icon">
            <loader-icon></loader-icon>
          </div>
        </div>
      </div>
      <div class="grid-row" v-else>
        <div class="grid-column-12">
          <div class="BlogHomePage__content__pagination">
            <button class="BlogHomePage__content__pagination__button" @click="loadMorePosts">Load More</button>
          </div>
        </div>
      </div>
    </div>
    <blog-home-footer></blog-home-footer>
    
  </div>
</template>

<script>
import BlogCardLarge from '../components/common/BlogCardLarge.vue'
import BlogCardMini from '../components/common/BlogCardMini.vue'
import BlogHeader from '../components/common/BlogHeader.vue'
import BlogHomeFooter from '../components/blog-home/BlogHomeFooter.vue'
import LoaderIcon from '../components/common/Loader.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: { BlogHeader, BlogCardLarge, BlogCardMini, BlogHomeFooter, LoaderIcon },
  mounted() {
    this.getPosts()
  },
  computed: {
    ...mapGetters('posts', ['posts', 'loading', 'error', ''])
  },
  methods: {
    ...mapActions('posts', ['getPosts', 'loadMorePosts']),
  },
}
</script>

<style lang="scss">
.BlogHomePage {
  background: #FFF;
  padding-left: 5rem;
  padding-right: 5rem;
  
  &__content{
    padding-top: 5rem;

    &__pagination{
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      margin-bottom: 5rem;

      &__button{
        background: #000;
        color: #FFF;
        padding: 1rem 2rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    }
    &__loader-icon{
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>