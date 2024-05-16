import { ref } from "vue";

export default function usePasswordGenerator(passwordLength, includeUppercase, includeNumbers, includeSpecialChars) {
  const generatedPassword = ref("");

  const worker = new Worker(new URL("./passGenWorker.js", import.meta.url));

  worker.onmessage = function(event) {
    generatedPassword.value = event.data;
  };

  const generatePassword = () => {
    worker.postMessage({
      passwordLength: passwordLength.value,
      includeUppercase: includeUppercase.value,
      includeNumbers: includeNumbers.value,
      includeSpecialChars: includeSpecialChars.value
    });
  };

  return {
    generatedPassword,
    generatePassword,
  };
}
