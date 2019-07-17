<template>
  <div class="pokemon border border-dark rounded mb-4">
    <h5>Name: {{pokemon.name.toUpperCase()}}</h5>
    <img :src="pokemon.sprites.front_default" alt="Sprite unvailable" />
    <h3>Pokédex Number: {{pokemon.id}}</h3>
    <div class="row">
      <div class="col-12">
        <h5>TYPES:</h5>
        <div v-for="(type, index) in pokemon.types" :key="index">
          <p>{{pokemon.types[index].type.name.toUpperCase()}}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "pokemon",
  props: ["pokemonProp"],
  data() {
    return {};
  },
  computed: {
    pokemon() {
      return this.$store.state.pokemon;
    }
  },
  methods: {
    setActivePokemon() {
      this.$store.dispatch("setActivePokemon", this.pokemonProp);
    }
  },
  components: {}
};
</script>


<style scoped>
img {
  height: 18vh;
}
</style>