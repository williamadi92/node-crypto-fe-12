export default eventHandler(async (event) => {
    const crypto = await import("node:crypto")

    const body = await readBody(event)
    const { privateKey, message } = body

    const bufferData = Buffer.from(message, "base64")
    const decryptedData = crypto.privateDecrypt({
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256"
    },
        bufferData
    )

    return {
        decryptedData: decryptedData.toString()
    }
})