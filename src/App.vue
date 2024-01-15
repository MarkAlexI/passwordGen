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
@import './assets/base.css';

header {
  line-height: 1.5;
  text-align: center;
  display: flex;
  justify-content: center;
  color: var(--color-text);
}
</style>
