<script setup>
import PasswordGeneratorForm from './PasswordGeneratorForm.vue';
import GeneratedPasswordDisplay from './GeneratedPasswordDisplay.vue';
  console.log('setup');
</script>

<template>
  <div>
    <PasswordGeneratorForm />
    <GeneratedPasswordDisplay />
  </div>
</template>
