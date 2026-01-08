const crypto = require("crypto");

// 1. Generate RSA keys
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});

// 2. Message BEFORE encryption
const message = "my secret message";
console.log("Before Encryption (Plaintext):", message);

// 3. Encrypt
const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(message));
console.log("After Encryption (Ciphertext):", encrypted.toString("base64"));

// 4. Decrypt
const decrypted = crypto.privateDecrypt(privateKey, encrypted);
console.log("After Decryption (Plaintext):", decrypted.toString());
