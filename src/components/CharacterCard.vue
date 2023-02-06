<script>
export default {
    name: 'CharacterCard',
    props: {
        character: Object
    }
}
</script>

<template>

    <div>
        <div>
            <img :src="character.image" :alt="character.name" class="rounded-circle img-fluid">
        </div>

        <div>
            <h3 class="mb-4">
                {{ character.name }}
            </h3>

            <h5>
                {{ character.status }}
            </h5>
            <h5>
                {{ character.species }}
            </h5>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>

</style>