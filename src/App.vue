<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'same-component'}">Same Component</router-link> |
      <router-link :to="{name: 'props-events'}">Props Events</router-link> |
      <router-link :to="{name: 'event-bus'}">Event Bus</router-link> |
      <router-link :to="{name: 'vuex'}">Vuex</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  height: calc(100vh - 16px);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
