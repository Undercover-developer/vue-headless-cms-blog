<template>
    <div class="BlogCardLarge">
        <div class="BlogCardLarge__image">
            <img width="100" :src="image" alt="">
        </div>
        <div class="BlogCardLarge__content">
            <div class="BlogCardLarge__content__header">
                <span class="BlogCardLarge__content__header__category">
                    {{ category }}
                </span>
                <span class="BlogCardLarge__content__header__time">
                    {{ timeSince(date) }}
                </span>
            </div>
            <div class="BlogCardLarge__content__title">
                <h3 v-html="title"></h3>
            </div>
            <div class="BlogCardLarge__content__description" v-html="description">
            </div>
            <div class="BlogCardLarge__content__footer">
                <div class="BlogCardLarge__content__footer__read-time">
                    {{ readTime }}
                </div>
                <div class="BlogCardLarge__content__footer__read-more-btn">
                    <router-link :to="`/${id}`">Read Full &#8594;</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { timeSince } from '@/helpers/date_time_formater'
export default {
    name: 'BlogCardLarge',
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
    .BlogCardLarge {
        display: grid;
        grid-template-columns: 37% 63%;
        height: 100%;
        padding: 8px;
        background: #FFFFFF;
        border: 1px solid #F5F5F5;
        border-radius: 5px;

        &__image {
            width: 100%;
            height: 100%;
            min-height: 200px;
            background: #F2F2F2;
            border-radius: 8px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 5px;
            }
        }

        &__content {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            padding: 1rem;
            gap: 8px;
            width: 100%;
            height: 100%;
            padding: 16px;
            box-sizing: border-box;

            &__header {
                &__category {
                    font-style: normal;
                    font-weight: 700;
                    font-size: 12px;
                    line-height: 14px;
                    text-transform: uppercase;
                    color: #4B4B4B;
                    margin-right: 1rem;
                }

                &__time {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 12px;
                    line-height: 14px;

                    color: #6E6E6E;
                }
            }

            &__title {
                font-style: normal;
                font-weight: 900;
                font-size: 22px;
                line-height: 26px;
                color: #2C2C2C;
            }

            &__description {
                p {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1rem;
                    line-height: 21px;
                    display: flex;
                    align-items: center;
                    color: #6E6E6E;
                }
            }
        }
        &__content__footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            &__read-time {
                    font-size: 0.8rem;
                    color: #999;
            }
            &__read-more-btn {
                a {
                    font-style: normal;
                    font-weight: 700;
                    font-size: 1rem;
                    line-height: 14px;
                    color: #1473E6;
                }
            }
        }
        @media (max-width: 768px) {
            display: none;
        }
    }
</style>