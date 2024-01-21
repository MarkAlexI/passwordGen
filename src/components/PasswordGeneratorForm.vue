<template>
  <div class="password-form">
    <div class="form-group">
      <label for="passwordLength">Password length:</label>
      <input
        class="form-control"
        type="number"
        :value="passwordLength"
        @input="$emit('update:passwordLength', $event.target.value)"
        min="6"
        max="20"
      </input>
    </div>
    <div class="form-group">
      <label for="includeUppercase">Include uppercase:</label>
      <input
        type="checkbox"
        :value="includeUppercase"
        @input="$emit('update:includeUppercase', $event.target.value)"
      </input>
    </div>
    <div class="form-group">
      <label for="includeNumbers">Include numbers:</label>
      <input
        type="checkbox"
        :value="includeNumbers"
        @input="$emit('update:includeNumbers', $event.target.value)"
      </input>
    </div>
    <button
      @click="generatePassword"
    >Generate Password</button>
  </div>
</template>

<script setup>
defineProps([
  'passwordLength',
  'includeUppercase',
  'includeNumbers',
  'generatePassword'
]);

defineEmits([
  'update:passwordLength',
  'update:includeUppercase',
  'update:includeNumbers'
]);
</script>

<style scoped lang="scss">
@import '../assets/base.css';

.password-form {
  max-width: 300px;
  margin: auto;

  .form-group {
    margin-bottom: 15px;

    label {
      display: block;
      margin-bottom: 5px;
      color: var(--color-heading);
    }

    input[type="number"], input[type="checkbox"] {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
      background-color: var(--color-background-mute);
      border: 1px solid var(--color-border);
      color: var(--color-text);
    }
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: var(--color-heading);
    color: var(--color-background);
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--color-border-hover);
    }
  }
}
</style>
