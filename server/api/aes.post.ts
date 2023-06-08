export default eventHandler(async (event) => {
    const body = await readBody(event)
    const { message } = body

    const crypto = await import("node:crypto")

    const ENC_KEY = crypto.randomBytes(16); // set random encryption key
    const IV = crypto.randomBytes(16); // set random initialisation vector

    const encrypt = (val: string) => {
        let cipher = crypto.createCipheriv("aes-128-cbc", ENC_KEY, IV);
        let encrypted = cipher.update(val, "utf8", "base64");
        encrypted += cipher.final("base64");
        return encrypted;
    };

    const decrypt = (encrypted: string) => {
        let decipher = crypto.createDecipheriv("aes-128-cbc", ENC_KEY, IV);
        let decrypted = decipher.update(encrypted, "base64", "utf8");
        return decrypted + decipher.final("utf8");
    };

    const encryptedData = encrypt(message)
    const decryptedData = decrypt(encryptedData)

    return {
        encryptedData,
        decryptedData
    }
})