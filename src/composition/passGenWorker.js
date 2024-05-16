self.onmessage = function (event) {
  const {
    passwordLength,
    includeUppercase,
    includeNumbers,
    includeSpecialChars
  } = event.data;

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "#$_&%(){}[]";

  let chars = lowercaseChars;
  if (includeUppercase) chars += uppercaseChars;
  if (includeNumbers) chars += numberChars;
  if (includeSpecialChars) chars += specialChars;

  const password = Array.from({ length: passwordLength }, () => chars[Math.floor(Math.random() * chars.length)]).join("");

  self.postMessage(password);
};
