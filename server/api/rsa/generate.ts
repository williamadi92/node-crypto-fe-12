export default async () => {
    const crypto = await import('node:crypto');
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: "pkcs1",
            format: "pem",
        },
        privateKeyEncoding: {
            type: "pkcs1",
            format: "pem",
        }
    })

    const publicKeyBase64 = Buffer.from(publicKey, 'utf-8').toString('base64');
    const privateKeyBase64 = Buffer.from(privateKey, 'utf-8').toString('base64');

    return {
        publicKey: publicKeyBase64,
        privateKey: privateKeyBase64
    }
}