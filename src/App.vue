<template>
  <headermove/>
  <intro/>
  <about/>
  <project/>
  <clone/>
  <contact/>
</template>

<script>
import headermove from "./components/headermove.vue"
import intro from './components/intro.vue'
import about from './components/about.vue'
import project from './components/project.vue'
import clone from './components/clone.vue'
import contact from './components/contact.vue'

export default {
  name: 'App',
  components: {
    headermove,intro,about,project,clone,contact
  }
}
</script>

<style>
*{
  list-style: none;
  text-decoration: none;
}

html{
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
