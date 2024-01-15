<script setup>
import PasswordGeneratorForm from './PasswordGeneratorForm.vue';
import GeneratedPasswordDisplay from './GeneratedPasswordDisplay.vue';
  console.log('setup');
</script>

<template>
  <div class="password-app">
    <PasswordGeneratorForm />
    <GeneratedPasswordDisplay />
  </div>
</template>

<style scoped lang="scss">
.password-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;

  & > * {
    margin-bottom: 1.25rem;
  }
}
</style>
