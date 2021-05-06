<template>
    <div
        style="left: 242px; bottom: 90px"
        class="fixed top-0 right-0 pb-12 overflow-y-scroll px-7"
    >
        <div
            style="
                background-image: linear-gradient(to top, transparent, #2a2424);
            "
            class="pt-20 -mx-7 px-7"
        >
            <h2 class="text-3xl font-extrabold text-white">Good {{ when }}</h2>
            <div class="grid grid-cols-3 mt-6 gap-x-6 gap-y-4">
                <greeting-card
                    v-for="element in greetingData"
                    :key="element"
                    :coverUrl="element.coverUrl"
                    :title="element.title"
                />
            </div>
        </div>
        <collection-section title="Recently played" />
    </div>
</template>

<script>
import GreetingCard from '../components/cards/GreetingCard.vue'
import CollectionSection from '../components/sections/CollectionSection.vue'
import greetingData from '../data/greeting.js'
export default {
    components: {
        GreetingCard,
        CollectionSection,
    },
    data() {
        return {
            greetingData,
        }
    },
    computed: {
        when() {
            const currentHour = new Date().getHours()
            if (currentHour <= 12) return 'morning'
            if (currentHour <= 17) return 'afternoon'
            return 'evening'
        },
    },
}
</script>
