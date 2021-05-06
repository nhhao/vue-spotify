<template>
    <section class="mt-10" v-for="section in collections" :key="section">
        <div class="flex items-end justify-between">
            <a href="#" class="hover:underline">
                <h3 class="text-2xl font-bold">
                    {{ section.title }}
                </h3>
            </a>
            <a
                href="#"
                class="text-sm font-bold uppercase text-not-selected hover:underline"
                >see all</a
            >
        </div>

        <!-- collection section -->
        <div class="grid grid-cols-5 grid-rows-1 mt-5 gap-x-6">
            <collection-card
                v-for="card in section.cards"
                :key="card"
                :coverUrl="card.coverUrl"
                :title="card.title"
                :description="card.description"
                :type="card.type"
            />
        </div>
    </section>
</template>

<script>
import CollectionCard from '../cards/CollectionCard.vue'
import collections from '../../data/collections.js'
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    components: {
        CollectionCard,
    },
    data() {
        return {
            collections,
        }
    },
}
</script>
