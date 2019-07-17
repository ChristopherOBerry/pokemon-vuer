<template>
  <div class="home container">
    <div class="row">
      <div class="col-12">
        <h1>
          Pokémon
          <img alt="Vue logo" src="../assets/logo.png" />uer
        </h1>
      </div>
      <search class="col-12"></search>
    </div>
    <div class="row">
      <div class="col-12">
        <pokemon></pokemon>
      </div>
      <div class="col-12">
        <PokemonDetails></PokemonDetails>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Search from "../components/Search";
import Pokemon from "../components/Pokemon";
import PokemonDetails from "@/components/PokemonDetails";

export default {
  name: "home",
  computed: {
    pokemon() {
      return this.$store.state.pokemon;
    }
  },

  components: {
    Search,
    Pokemon,
    PokemonDetails
  }
};
</script>
