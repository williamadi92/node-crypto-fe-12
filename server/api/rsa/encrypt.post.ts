export default eventHandler(async (event) => {
    const crypto = await import("node:crypto")

    const body = await readBody(event)
    const { publicKey, message } = body

    const encryptedData = crypto.publicEncrypt({
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256"
    },
        Buffer.from(message)
    )

    return {
        encryptedData: encryptedData.toString("base64")
    }
})