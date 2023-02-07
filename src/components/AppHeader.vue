<script>
import axios from 'axios';
import { store } from '../store.js';
import SearchForm from './SearchForm.vue';

export default {
    name: 'AppHeader',
    components: {
        SearchForm
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getCharacters() {

            console.log('SONO IN GETCHARACTERS');

            // const fullUrl = 'https://rickandmortyapi.com/api/character?name=' + this.store.nameValue + '&status=' + this.store.statusValue;
            // console.log(fullUrl);

            this.store.loading = true;

            axios
                .get('https://rickandmortyapi.com/api/character', {
                    params: {
                        name: this.store.nameValue,
                        status: this.store.statusValue
                    }
                })
                .then((response) => {
                    this.store.results = response.data.results;

                    this.store.loading = false;
                });
        },
        resetSearch() {

            console.log('SONO IN RESETSEARCH');

            this.store.nameValue = '';
            this.store.statusValue = '';

            this.getCharacters();

        }
    },
    created() {

        this.getCharacters();

        // axios
        //     .get('https://rickandmortyapi.com/api/character')
        //     .then((response) => {
        //         this.store.results = response.data.results;
        //     });

    }
}
</script>

<template>
    
    <header>
        
        <div class="container text-center">
            <h1 class="my-5">
                Rick and Morty App
            </h1>

            <!-- <div>
                Name: {{ store.nameValue }} | Status: {{ store.statusValue }}
            </div> -->

            <SearchForm @search="getCharacters" @clear="resetSearch" />
        </div>

    </header>

</template>

<style lang="scss" scoped>
</style>