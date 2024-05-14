import { ref } from "vue";

export default function usePasswordGenerator(passwordLength, includeUppercase, includeNumbers, includeSpecialChars) {
  const generatedPassword = ref("");

  const generatePassword = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "#$_&%(){}[]";

    let chars = lowercaseChars;
    if (includeUppercase.value) chars += uppercaseChars;
    if (includeNumbers.value) chars += numberChars;
    if (includeSpecialChars.value) chars += specialChars;

    const password = Array.from({ length: passwordLength.value }, () => chars[Math.floor(Math.random() * chars.length)]).join("");

    generatedPassword.value = password;
  };

  return {
    generatedPassword,
    generatePassword,
  };
}
