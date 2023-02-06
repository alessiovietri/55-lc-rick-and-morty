<script>
import SearchForm from './SearchForm.vue';

export default {
    name: 'AppHeader',
    components: {
        SearchForm
    }
}
</script>

<template>
    
    <header>
        
        <div class="container text-center">
            <h1 class="my-5">
                Rick and Morty App
            </h1>

            <SearchForm />
        </div>

    </header>

</template>

<style lang="scss" scoped>
</style>