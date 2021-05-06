<template>
    <the-side-bar />
    <the-header />
    <the-play-bar />
    <router-view />
</template>

<script>
import TheSideBar from './components/layouts/TheSideBar.vue'
import TheHeader from './components/layouts/TheHeader.vue'
import ThePlayBar from './components/layouts/ThePlayBar.vue'
export default {
    components: {
        TheSideBar,
        TheHeader,
        ThePlayBar,
    },
}
</script>

<style>
::-webkit-scrollbar {
    width: 7px;
}

/* Track */
/* ::-webkit-scrollbar-track {
    background: none;
} */

/* Handle */
::-webkit-scrollbar-thumb {
    background: rgba(110, 110, 110, 0.75);
    border-radius: 999px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: rgba(150, 150, 150, 0.75);
}
body {
    color: #fff;
    background: #121212;
}
</style>
