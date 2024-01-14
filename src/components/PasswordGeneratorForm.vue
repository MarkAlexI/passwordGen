<template>
  <div class="container">
    <div>
      <label for="passwordLength">Password length:</label>
      <input type="number" v-model="passwordLength" min="6" max="20"</input>
    </div>
    <div>
      <label for="includeUppercase">Include uppercase:</label>
      <input type="checkbox" v-model="includeUppercase" </input>
    </div>
    <div>
      <label for="includeNumbers">Include numbers:</label>
      <input type="checkbox" v-model="includeNumbers" </input>
    </div>
    <button class="btn" @click="generatePassword">Generate Password</button>
    <p>{{ generatedPassword }}</p>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  const passwordLength = ref(8);
  const includeUppercase = ref(true);
  const includeNumbers = ref(true);
  const generatedPassword = ref('');
  const generatePassword = () => generatedPassword.value = 'passw0rd';
</script>
