<template>
    <div class="pokemon-details">
        

    </div>
</template>


<script>
export default {
    name: 'pokemon-details',
    data(){
        return {}
    },
    computed:{
        pokemon(){
            return this.$store.state.activePokemon
        }
    },
    methods:{},
    components:{}
}
</script>


<style scoped>

</style>