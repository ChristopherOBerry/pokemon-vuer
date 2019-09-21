<template>
  <div id="app">
    <div id="nav" class="bg-dark mb-4">
      <img src="../public/pokeball.png" alt="pokeball" style="width:3vw;" class="m-1" />
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: lightgray;
}

#nav a.router-link-exact-active {
  color: white;
}
a {
  color: lightgray;
}
</style>
