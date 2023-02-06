<script>
export default {
    name: 'SearchForm'
}
</script>

<template>
    
    <div class="w-50 mx-auto d-flex justify-content-center">
        <form action="">
            <div class="row">
                <div class="col-auto">
                    <input type="text" class="form-control" placeholder="Search character" aria-label="Search character">
                </div>
                <div class="col-auto">
                    <select class="form-select" aria-label="Select status">
                        <option selected>Select status</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary">
                        Search
                    </button>
                </div>
                <div class="col-auto">
                    <button type="reset" class="btn btn-warning">
                        Reset
                    </button>
                </div>
            </div>
        </form>
    </div>

</template>

<style lang="scss" scoped>

</style>