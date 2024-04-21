<script setup>
import PasswordGenerator from './components/PasswordGenerator.vue'
</script>

<template>
  <header>
    <div>
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
  display: block;
  color: var(--color-text);
}
</style>
