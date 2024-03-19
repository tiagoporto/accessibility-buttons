<template>
  <footer class="footer">Copyright © 2014 - {{year}} Tiago Porto</footer>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
})
</script>


<style lang="stylus" scoped>
@import './Footer';
</style>
