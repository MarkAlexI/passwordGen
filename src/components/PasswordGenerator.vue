<script setup>
import PasswordGeneratorForm from "./PasswordGeneratorForm.vue";
import GeneratedPasswordDisplay from "./GeneratedPasswordDisplay.vue";
import usePasswordGenerator from "../composition/usePasswordGenerator";

const {
  passwordLength,
  includeUppercase,
  includeNumbers,
  includeSpecialChars,
  generatedPassword,
  generatePassword
} = usePasswordGenerator();
</script>

<template>
  <div class="password-app">
    <PasswordGeneratorForm
      :passwordLength="passwordLength"
      :includeUppercase="includeUppercase"
      :includeNumbers="includeNumbers"
      :includeSpecialChars="includeSpecialChars"
      :generatePassword="generatePassword"
    />
    <GeneratedPasswordDisplay
      :generatedPassword="generatedPassword"
    />
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
