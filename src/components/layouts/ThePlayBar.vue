<template>
    <div
        style="height: 90px"
        class="fixed bottom-0 flex items-center justify-between w-full px-5 bg-playBar"
        @scroll.prevent=""
    >
        <!-- song info -->
        <div class="flex items-center justify-center">
            <div>
                <img class="w-14" :src="currentSong.coverUrl" alt="" />
            </div>
            <div class="ml-5">
                <h1 class="text-sm font-medium leading-none">
                    <a href="#" class="hover:underline">
                        {{ currentSong.title }}
                    </a>
                </h1>
                <span style="font-size: 11px"
                    ><a
                        href="#"
                        class="opacity-70 hover:underline hover:opacity-100"
                    >
                        {{ currentSong.artist }}
                    </a>
                </span>
            </div>
            <div class="space-x-4 ml-7">
                <button class="opacity-70 hover:opacity-100 focus:outline-none">
                    <svg
                        role="img"
                        height="16"
                        width="16"
                        class="fill-current"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"
                        ></path>
                    </svg>
                </button>
                <button class="opacity-70 hover:opacity-100 focus:outline-none">
                    <svg
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g fill="currentColor" fill-rule="evenodd">
                            <path
                                d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                                fill-rule="nonzero"
                            ></path>
                            <path d="M10 8h4v3h-4z"></path>
                        </g>
                    </svg>
                </button>
            </div>
        </div>

        <!-- playback controller -->
        <div class="flex flex-col items-center space-y-2.5">
            <!-- controller -->
            <div class="flex items-center space-x-7 text-not-selected">
                <span class="hover:text-white"
                    ><svg
                        role="img"
                        height="16"
                        width="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"
                        ></path>
                    </svg>
                </span>
                <span class="hover:text-white"
                    ><svg
                        role="img"
                        height="16"
                        width="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"
                        ></path>
                    </svg>
                </span>
                <span
                    class="flex items-center justify-center text-black transition duration-75 transform bg-white rounded-full w-9 h-9 hover:scale-105"
                    ><svg
                        role="img"
                        height="16"
                        width="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M4.018 14L14.41 8 4.018 2z"></path>
                    </svg>
                </span>
                <span class="hover:text-white"
                    ><svg
                        role="img"
                        height="16"
                        width="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                    >
                        <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path>
                    </svg>
                </span>
                <span class="hover:text-white"
                    ><svg
                        role="img"
                        height="16"
                        width="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                    >
                        <path
                            d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z"
                        ></path>
                    </svg>
                </span>
            </div>

            <!-- progress-bar -->
            <div
                style="font-size: 11px"
                class="flex items-center space-x-3 text-not-selected"
            >
                <span>{{ currentTime }}</span>
                <div class="py-0.5 group">
                    <div
                        style="background: #828282"
                        class="relative h-1 rounded-full w-96"
                    >
                        <span
                            class="absolute top-0 bottom-0 left-0 inline-block w-2/3 rounded-full group-hover:bg-brand bg-progress-bar"
                        ></span>
                        <span
                            class="absolute hidden w-3 h-3 transform -translate-x-1 -translate-y-1/2 bg-white rounded-full group-hover:inline-block top-1/2 left-2/3"
                        ></span>
                    </div>
                </div>
                <span>{{ lengthOfSong }}</span>
            </div>
        </div>

        <!-- volume controller -->
        <div class="flex items-center space-x-3">
            <button class="opacity-70 hover:opacity-100 focus:outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                </svg>
            </button>
            <button class="opacity-70 hover:opacity-100 focus:outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                </svg>
            </button>
            <div class="flex items-center py-0.5 space-x-2 group">
                <button class="opacity-70 hover:opacity-100 focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                        />
                    </svg>
                </button>
                <div
                    style="background: #828282"
                    class="relative w-24 h-1 rounded-full"
                >
                    <span
                        class="absolute top-0 bottom-0 left-0 inline-block w-2/3 rounded-full group-hover:bg-brand bg-progress-bar"
                    ></span>
                    <span
                        class="absolute hidden w-3 h-3 transform -translate-x-1 -translate-y-1/2 bg-white rounded-full group-hover:inline-block top-1/2 left-2/3"
                    ></span>
                </div>
            </div>
            <button class="opacity-70 hover:opacity-100 focus:outline-none">
                <svg
                    role="img"
                    height="16"
                    width="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        d="M6.064 10.229l-2.418 2.418L2 11v4h4l-1.647-1.646 2.418-2.418-.707-.707zM11 2l1.647 1.647-2.418 2.418.707.707 2.418-2.418L15 6V2h-4z"
                    ></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentSong: {
                title: 'Có Người',
                artist: 'Vu Cat Tuong',
                coverUrl:
                    'https://i.scdn.co/image/ab67616d00001e02a383c2304fb85f6928896802',
                length: '236',
            },
        }
    },
    computed: {
        currentTime() {
            return '2:24'
        },
        lengthOfSong() {
            const second = this.currentSong.length % 60
            const minute = (this.currentSong.length - second) / 60
            return `${minute}:${second}`
        },
    },
}
</script>
