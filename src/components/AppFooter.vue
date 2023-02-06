<script>
import { store } from '../store.js';

export default {
    name: 'AppFooter',
    data() {
        return {
            store
        }
    }
}
</script>

<template>

    <footer class="py-4">
        <div class="container text-center">
            <strong>
                Found {{ store.results.length }} characters
            </strong>
        </div>
    </footer>
    
</template>

<style lang="scss" scoped>

</style>