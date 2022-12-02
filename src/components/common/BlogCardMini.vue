<template>
    <div class="BlogCardMini">
        <div class="BlogCardMini__image">
            <img :src="image" alt="">
        </div>
        <div class="BlogCardMini__content">
            <div class="BlogCardMini__content__header">
                <span class="BlogCardMini__content__header__category">
                {{ category }}
                </span>
                <span class="BlogCardMini__content__header__time">
                {{ timeSince(date) }}
                </span>
            </div>
            <div class="BlogCardMini__content__title">
                <h3 v-html="title"></h3>
            </div>
            <div class="BlogCardMini__content__description" v-html="description">
            </div>
            <div class="BlogCardMini__content__footer">
                <div class="BlogCardMini__content__footer_read-time">
                {{ readTime }}
                </div>
                <div class="BlogCardMini__content__footer_read-more-btn">
                    <router-link :to="`/${id}`">Read Full &#8594;</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { timeSince } from '@/helpers/date_time_formater'
export default {
    name: 'BlogCardMini',
    props: {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        readTime: {
            type: String
        },
        category: {
            type: String
        }
    },
    methods: {
        timeSince
    }
}
</script>

<style lang="scss">
    .BlogCardMini {
        display: flex;
        flex-direction: column;
        background: #FFF;
        padding: 8px;
        border: 1px solid #F5F5F5;
        border-radius: 5px;
      
        &__image {
            width: 100%;
            max-height: 200px;
            background: #F2F2F2;
            border-radius: 8px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            img {
                width: 100%;
                height: 200px;
                object-fit: cover !important;
                border-radius: 8px;
            }
        }

        &__content {
            padding: 1rem;
            &__header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                &__category {
                    font-size: 0.8rem;
                    color: #999;
                    text-transform: uppercase;
                }
                &__time {
                    font-size: 0.8rem;
                    color: #999;
                }
            }
            &__title {
                h3 {
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin: 0.5rem 0;
                }
            }
            &__description {
                p {
                    font-size: 0.9rem;
                    color: #999;
                    margin: 0.5rem 0;
                }
            }
            &__footer {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 0.9rem;
                &__read-time {
                    font-size: 0.8rem;
                    color: #999;
                }
                &__read-more-btn {
                    a {
                        font-style: normal;
                        font-weight: 700;
                        font-size: 12px;
                        line-height: 14px;
                        color: #1473E6;
                    }
                }
            }
        }
    }
</style>