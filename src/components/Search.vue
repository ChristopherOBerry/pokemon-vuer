<template>
  <div class="search col-12">
    <form @submit.prevent="search">
      <label for="search">
        <h5>Search:</h5>
      </label>
      <input
        name="search"
        type="text"
        placeholder="Enter a Pokémon or Pokédex ID"
        v-model="query"
        style="width: 40vw;"
      />
      <button
        style="background-color:lightgray;"
        class="btn btn border border-primary m-1"
        type="submit"
      >Search</button>
    </form>
  </div>
</template>


<script>
export default {
  name: "search",
  data() {
    return { query: "" };
  },
  computed: {},
  methods: {
    search() {
      this.$store.dispatch("search", this.query.toLowerCase());
    }
  },
  components: {}
};
</script>


<style scoped>
</style>