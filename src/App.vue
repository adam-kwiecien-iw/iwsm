<template>
  <div class="title">
    <img alt="IW Logo" src="./assets/banner.png" width="500" height="200">
    <h1 style="margin-top: -60px">
    SKILLS MATRIX
    </h1>
  </div>
  <router-view/>
</template>

<style>
body{
  background: white;
  color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  color: inherit;
}

.title {
  white-space: nowrap;
  align-content: center;
  font-size: 12pt;
  margin-top: -30px;
  margin-bottom: 50px;
  color: #404041;
}
</style>
