<script>
import { store } from '../store.js';

export default {
    name: 'SearchForm',
    data() {
        return {
            store
        };
    }
}
</script>

<template>
    
    <div class="w-50 mx-auto d-flex justify-content-center">
        <form action="" @submit.prevent="$emit('search')">
            <div class="row">
                <div class="col-auto">
                    <input
                        type="text"
                        v-model="store.nameValue"
                        name="name"
                        class="form-control"
                        placeholder="Search character"
                        aria-label="Search character">
                </div>
                <div class="col-auto">
                    <select
                        v-model="store.statusValue"
                        name="status"
                        class="form-select"
                        aria-label="Select status">
                        <option selected value="">Select status</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary">
                        Search
                    </button>
                </div>
                <div class="col-auto">
                    <button type="reset" @click="$emit('clear')" class="btn btn-warning">
                        Reset
                    </button>
                </div>
            </div>
        </form>
    </div>

</template>

<style lang="scss" scoped>

</style>