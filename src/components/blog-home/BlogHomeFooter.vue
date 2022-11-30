<template>
    <div class="BlogHomeFooter">
        <div class="BlogHomeFooter__content">
            <div class="grid-row">
                <div class="grid-column-12">
                    <div class="BlogHomeFooter__content__title">
                        <h3>Join Our Team Of Writers</h3>
                    </div>
                    <div class="BlogHomeFooter__content__description">
                        <p>
                            On Dasdas earn a living doing what they love. <br>
                            Getting started is easy. Just pay a one time 25$ and everything is ready to go.
                        </p>
                    </div>
                    <div class="BlogHomeFooter__content__action">
                        <button class="BlogHomeFooter__content__action-button" @click="initTransaction">
                            Join Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>    
import {useFlutterwave} from "flutterwave-vue3"

export default {
    name: 'BlogHomeFooter',
    methods: {
        initTransaction() {
            //generate a random transaction id
            const transactionRef = Math.floor(Math.random() * 1000000000 + 1);
            useFlutterwave({
                amount: 4000,//amount
                callback() {
                },
                country: "NG",
                currency: "NGN",
                customer: { email: 'test@me.com', name: 'mega', phone_number: '+2347086967055' },
                onclose() {

                },
                public_key: "FLWPUBK_TEST-101107aac3a3e393dd1ac132d14c5fd5-X",
                redirect_url: undefined,
                tx_ref: transactionRef,
            })
        }
    }
}
</script>

<style lang="scss">
    .BlogHomeFooter {
        background: #FFFFFF;
        padding: 2rem 0;
        text-align: center;
        &__content {
            &__title {
                h3 {
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #000;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 32px;
                    line-height: 38px;
                }
            }
            &__description {
                p {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 1rem;
                    line-height: 1.6rem;
                    color: #6E6E6E;
                    margin-bottom: 1rem;
                }
            }
            &__action {
                .BlogHomeFooter__content__action-button {
                    background: #000;
                    color: #FFF;
                    border: none;
                    padding: 0.5rem 1rem;
                    font-size: 1rem;
                    font-weight: 600;
                    border-radius: 0.1rem;
                    cursor: pointer;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 21px;
                    text-transform: uppercase;
                }
            }
        }
    }
</style>