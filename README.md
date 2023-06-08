# Akselerasi-FE12
Playground Week 6 Sesi 2 Materi FE 12 Node Crypto

Documentation for Key Length **createChiperiv**
```javascript
const ENC_KEY = crypto.randomBytes(16); // set random encryption key
const IV = crypto.randomBytes(16); // set random initialisation vector

let cipher = crypto.createCipheriv("aes-128-cbc", ENC_KEY, IV);
```
<img width="846" alt="image" src="https://github.com/irsyaadbp/Akselerasi-FE12/assets/23293993/6bd050ef-6f65-4059-b473-9c3095538dd7">