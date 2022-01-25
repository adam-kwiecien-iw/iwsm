<template>
  <div class="title">
    
    <h1 style="margin-top: -60px">
    SKILLS MATRIX
    </h1>
    <Header />
  </div>
  <router-view/>
</template>

<script>
import Header from './components/common/Header'; //import 헤더 추가

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
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
