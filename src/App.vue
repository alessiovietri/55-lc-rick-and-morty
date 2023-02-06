<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: "App",
    components: {
        AppHeader,
        AppMain,
        AppFooter
    },
    data() {
        return {
            store
        }
    },  
    created() {

        axios
            .get('https://rickandmortyapi.com/api/character')
            .then((response) => {
                this.store.results = response.data.results;
            });

    }
};
</script>

<template>

    <AppHeader />

    <AppMain />

    <AppFooter />
    
</template>

<style lang="scss">
@import './styles/main';
</style>
