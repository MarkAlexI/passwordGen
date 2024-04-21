<template>
  <div>
    <strong>Generated Password:</strong>
    <p>{{ generatedPassword }}</p>
  </div>
</template>

<script setup>
  defineProps(["generatedPassword"]);
</script>

<style scoped lang="scss">
  p {
    text-align: center;
    color: blue;
    word-break: break-all;
  }
</style>
