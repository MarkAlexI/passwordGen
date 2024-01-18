import { ref } from 'vue';

export default function usePasswordGenerator() {
  const passwordLength = ref(12);
  const includeUppercase = ref(true);
  const includeNumbers = ref(true);
  const generatedPassword = ref('');

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';

    let chars = lowercaseChars;
    if (includeUppercase.value) chars += uppercaseChars;
    if (includeNumbers.value) chars += numberChars;

    let password = '';
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
    generatedPassword,
    generatePassword,
  };
}
