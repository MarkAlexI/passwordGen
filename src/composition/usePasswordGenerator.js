import { ref } from "vue";

export default function usePasswordGenerator() {
  const passwordLength = ref(12);
  const includeUppercase = ref(true);
  const includeNumbers = ref(true);
  const includeSpecialChars = ref(false);
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

    let password = "";
    for (let i = 0; i < passwordLength.value; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }

    generatedPassword.value = password;
  };

  return {
    passwordLength,
    includeUppercase,
    includeNumbers,
    includeSpecialChars,
    generatedPassword,
    generatePassword,
  };
}
