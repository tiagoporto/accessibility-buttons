<template>
  <Header />
  <Main />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'normalize.css'
import Header from './Header/Header.vue'
import Main from './Main/Main.vue'
import Footer from './Footer/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
})
</script>


<style lang="stylus">
// #app
//   font-family Avenir, Helvetica, Arial, sans-serif
//   -webkit-font-smoothing antialiased
//   -moz-osx-font-smoothing grayscale
//   text-align center
//   color #2c3e50
//   margin-top 60px
</style>
