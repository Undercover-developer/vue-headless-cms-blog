<template>
  <div class="BlogHeader">
    <div class="BlogHeader__logo">
        <router-link to="/">
            <img src="@/assets/logo.svg" alt="logo">
        </router-link>
    </div>
    <div class="BlogHeader__side-menu">
        <div class="BlogHeader__side-menu__item">
            <img src="@/assets/icons/twitter-icon.svg" alt="">
        </div>
        <div class="BlogHeader__side-menu__item">
            <img src="@/assets/icons/dribble-icon.svg" alt="">
        </div>
        <div class="BlogHeader__side-menu__item">
            <img src="@/assets/icons/figma-icon.svg" alt="">
        </div>
        <div class="BlogHeader__side-menu__item">
            <img src="@/assets/icons/github-icon.svg" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'BlogHeader',
}
</script>

<style lang="scss">
.BlogHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;

    &__logo {
        width: 24px;
        height: 24px;
    }

    &__side-menu {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        padding: 0px;
        gap: 8px;

        width: 180px;
        height: 24px;


        /* Inside auto layout */

        flex: none;
        order: 1;
        flex-grow: 0;

        &__item {
            width: 24px;
            height: 24px;
        }
    }
}

</style>