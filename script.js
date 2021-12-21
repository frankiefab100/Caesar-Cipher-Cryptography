function caesarCipher (str, offset) {
  if (offset < 0) {
    return caesarCipher(str, offset + 26);
  }

  let encryptedMessage = "";

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (letter.match(/[a-z]/i)) {
      let plainText = str.charCodeAt(i);

      if (plainText >= 65 && plainText <= 90) {
        letter = String.fromCharCode(((plainText - 65 + offset) % 26) + 65);
      }
      else if (plainText >= 97 && plainText <= 122) {
        letter = String.fromCharCode(((plainText - 97 + offset) % 26) + 97);
      }
    }
    encryptedMessage += letter;
  }
  return encryptedMessage;
};
