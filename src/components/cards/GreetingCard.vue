<template>
    <router-link
        to="#"
        class="flex items-center font-bold transition duration-300 rounded-md hover"
    >
        <span>
            <img :src="coverUrl" class="w-20 h-20 rounded-l-md" />
        </span>
        <span class="flex items-center justify-between flex-1 px-4">
            <h4>{{ title }}</h4>
            <button
                class="inline-block p-3 transition transform rounded-full btn focus:outline-none hover:scale-105"
            >
                <svg
                    height="16"
                    role="img"
                    width="16"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <polygon
                        points="21.57 12 5.98 3 5.98 21 21.57 12"
                        fill="currentColor"
                    ></polygon>
                </svg>
            </button>
        </span>
    </router-link>
</template>

<script>
export default {
    props: {
        coverUrl: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped>
a {
    background: rgba(54, 54, 54, 0.75);
}
a:hover {
    background: rgba(90, 90, 90, 0.75);
}

img {
    box-shadow: 7px 0 15px rgba(36, 36, 36, 0.5);
}
.btn {
    display: none;
    background: #1db954;
    box-shadow: 0 5px 10px rgba(32, 32, 32, 0.8);
}
a:hover button {
    display: inline-block;
}
</style>
