<template>
  <div class="password-form">
    <div class="form-group">
      <label for="passwordLength">Password length:</label>
      <input
        class="form-control"
        type="number"
        v-model="passwordLength"
        min="6"
        max="20"
      </input>
    </div>
    <div class="form-group">
      <label for="includeUppercase">Include uppercase:</label>
      <input
        type="checkbox"
        v-model="includeUppercase"
      </input>
    </div>
    <div class="form-group">
      <label for="includeNumbers">Include numbers:</label>
      <input
        type="checkbox"
        v-model="includeNumbers"
      </input>
    </div>
    <button
      @click="generatePassword"
    >Generate Password</button>
    <p>{{ generatedPassword }}</p>
  </div>
</template>

<script setup>
/*  import { ref } from 'vue';
  const passwordLength = ref(8);
  const includeUppercase = ref(true);
  const includeNumbers = ref(true);
  const generatedPassword = ref('');
  const generatePassword = () => generatedPassword.value = 'passw0rd';
*/
import usePasswordGenerator from '../composition/usePasswordGenerator';

const { passwordLength, includeUppercase, includeNumbers, generatedPassword, generatePassword } = usePasswordGenerator();
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
