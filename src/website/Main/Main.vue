<template>
  <main class="main">
    <div class="row">
      <div class="column">
        <accessibility-font
          increaseAriaLabel="Increase Font"
          increaseLabel="++A"
          decreaseLabel="--A"
          decreaseAriaLabel="Decrease Font"
        ></accessibility-font>
        <button type="button" @click="handleFont">-A</button>
        <button type="button" data-accessibility="font">+A</button>
      </div>
      <div class="column">
        <button type="button" @click="handleContrast">Add Contrast</button>
      </div>
    </div>

    <h2>Install</h2>

    <code>
      <pre>npm install accessibility-buttons --save</pre>
    </code>

    <h2>Usage</h2>

    <p>Import</p>
    <ul>
      <li>
        <kbd>accessibility-buttons/dist/css/accessibility-buttons.css</kbd>
      </li>
      <li>
        <kbd>accessibility-buttons/dist/js/accessibility-buttons.js</kbd>
      </li>
    </ul>

    <p>Add buttons</p>

    <code>
      <pre>&lt;button type="button" data-accessibility="font"&gt;+A&lt;/button&gt;
&lt;button type="button" data-accessibility="contrast"&gt;Add Contrast&lt;/button&gt;</pre>
    </code>

    <p>Initialize after DOM ready</p>

    <code>
      <pre>accessibilityButtons()</pre>
    </code>

    <p>
      <strong>Note:</strong> Font size works only with "em" or "rem" units.
    </p>

    <h2>Settings</h2>

    <p>
      Check
      <a
        href="https://github.com/tiagoporto/accessibility-buttons/blob/master/README.md"
      >github.com/tiagoporto/accessibility-buttons</a> for more details
    </p>
  </main>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import '../../lib/FontButton/index'

// import {
//   accessibilityFont,
//   accessibilityContrast,
//   onLoad,
// } from '../../lib/accessibility-buttons'

export default defineComponent({
  name: 'Main',
  // ready() {
  //   onLoad()
  // },
  // methods: {
  //   handleFont: accessibilityFont({}),
  //   handleContrast: accessibilityContrast({}),
  // },
})
</script>



<style lang="stylus" scoped>
@import './Main.styl';
</style>
