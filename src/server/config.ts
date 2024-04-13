
const env = process.env

export const PORT = env.PORT ?? "3000"
export const HOST = env.host ?? "0.0.0.0"
export const SERVER_URL = `http://${HOST}:${PORT}`

export const mongodb_uri = env.MONGODB_URI ?? 'mongodb://localhost:27017'
export const DATABASE_NAME = env.DATABASE_NAME ?? 'local'

export default {
    PORT,
    HOST,
    SERVER_URL 
}