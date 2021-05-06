<template>
    <a
        class="p-4 transition duration-200 ease-linear rounded-sm cursor-pointer card"
    >
        <div class="relative">
            <img :src="coverUrl" :alt="title" :class="imgClass" />
            <button
                class="absolute inline-block p-3 transition transform rounded-full bottom-2 right-2 btn focus:outline-none hover:scale-105 translate-y-1.5"
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
        </div>
        <h4 class="mt-4 font-bold truncate whitespace-nowrap">{{ title }}</h4>
        <p class="mt-2 text-sm text-not-selected">{{ description }}</p>
    </a>
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
        description: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
    },
    computed: {
        imgClass() {
            if (this.type === 'artist') return 'rounded-full'
            if (this.type === 'podcast') return 'rounded-2xl'
            return 'rounded-sm'
        },
    },
}
</script>

<style scoped>
.card {
    background: #171717;
}

.card:hover {
    background: #272727;
}
.btn {
    opacity: 0;
    transition: all 0.3s ease;
    background: #1db954;
    box-shadow: 0 5px 10px rgba(32, 32, 32, 0.8);
}
a:hover button {
    opacity: 1;
    transform: none;
}
img {
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.6);
}
</style>
