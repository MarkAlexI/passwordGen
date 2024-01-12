<script setup>
import PasswordGenerator from './components/PasswordGenerator.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Password generator</h1>
    </div>
  </header>

  <main>
    <PasswordGenerator />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
