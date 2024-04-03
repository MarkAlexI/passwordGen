<script setup>
import PasswordGeneratorForm from "./PasswordGeneratorForm.vue";
import GeneratedPasswordDisplay from "./GeneratedPasswordDisplay.vue";
import usePasswordGenerator from "../composition/usePasswordGenerator";
import { ref } from "vue";

const passwordLength = ref(12);
const includeUppercase = ref(true);
const includeNumbers = ref(true);
const includeSpecialChars = ref(false);

const {
  generatedPassword,
  generatePassword
} = usePasswordGenerator(passwordLength, includeUppercase, includeNumbers, includeSpecialChars);

const updatePasswordLength = (newLength) => {
  passwordLength.value = newLength;
};

const updateIncludeUppercase = (newValue) => {
  includeUppercase.value = newValue;
};

const updateIncludeNumbers = (newValue) => {
  includeNumbers.value = newValue;
};

const updateIncludeSpecialChars = (newValue) => {
  includeSpecialChars.value = newValue;
};
</script>

<template>
  <div class="password-app">
    <PasswordGeneratorForm
      :passwordLength="passwordLength"
      :includeUppercase="includeUppercase"
      :includeNumbers="includeNumbers"
      :includeSpecialChars="includeSpecialChars"
      :generatePassword="generatePassword"
      v-on:update:passwordLength="updatePasswordLength"
      v-on:update:includeUppercase="updateIncludeUppercase"
      v-on:update:includeNumbers="updateIncludeNumbers"
      v-on:update:includeSpecialChars="updateIncludeSpecialChars"
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
