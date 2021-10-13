<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/databinding">Data Binding</router-link> |
      <router-link to="/listbinding">List Binding</router-link> |
      <router-link to="/listbinding2">List Binding2</router-link> |
      <router-link to="/rendering">Rendering Method</router-link> |
      <router-link to="/event">Event Method</router-link> |
      <router-link to="/computedandwatch">Computed And Watch</router-link> |
      <router-link to="/nested">Nested</router-link> |
      <router-link to="/component">Component</router-link> |
      <router-link to="/provideinject">Provide - inject</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
