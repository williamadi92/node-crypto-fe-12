export default eventHandler(async (event) => {
    const { createHmac } = await import('node:crypto');

    const body = await readBody(event)
    const { message } = body
    const secret = 'inisecretkey';

    const hash = createHmac('sha256', secret)
        .update(message)
        .digest('base64')

    return {
        hash
    }
})