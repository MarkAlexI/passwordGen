<template>
  <div class="password-form">
    <div class="form-group">
      <label for="passwordLength">Password length:</label>
      <input
        class="form-control"
        type="number"
        :value="passwordLength"
        @input="$emit('update:passwordLength', Number($event.target.value))"
        min="6"
        max="20"
      />
    </div>
    <div class="form-group">
      <label for="includeUppercase">Include uppercase:</label>
      <input
        type="checkbox"
        :checked="includeUppercase"
        @change="$emit('update:includeUppercase', $event.target.checked)"
      />
    </div>
    <div class="form-group">
      <label for="includeNumbers">Include numbers:</label>
      <input
        type="checkbox"
        :checked="includeNumbers"
        @change.prevent="$emit('update:includeNumbers', $event.target.checked)"
      />
    </div>
    <div class="form-group">
      <label for="includeSpecialChars">Include special chars:</label>
      <input
        type="checkbox"
        :checked="includeSpecialChars"
        @change.prevent="$emit('update:includeSpecialChars', $event.target.checked)"
      />
    </div>
    <button
      @click.prevent="generatePassword"
    >Generate Password</button>
  </div>
</template>

<script setup>
defineProps([
  "passwordLength",
  "includeUppercase",
  "includeNumbers",
  "includeSpecialChars",
  "generatePassword"
]);

defineEmits([
  "update:passwordLength",
  "update:includeUppercase",
  "update:includeNumbers",
  "update:includeSpecialChars"
]);
</script>

<style scoped lang="scss">
@import "../assets/base.css";

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

  @media only screen and (max-width: 768px) {
    .form-group:not(:first-child) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  input, button {
    font-size: 2rem;
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
