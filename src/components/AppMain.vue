<script>
import CharacterCard from './CharacterCard.vue';
import { store } from '../store.js';

export default {
    name: 'AppMain',
    data() {
        return {
            store
        }
    },
    components: {
        CharacterCard
    }
}
</script>

<template>

    <main class="py-3">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                <div class="col text-center" v-for="character in store.results">
                    <CharacterCard :character="character" />
                </div>
            </div>
        </div>
    </main>
    
</template>

<style lang="scss" scoped>

</style>