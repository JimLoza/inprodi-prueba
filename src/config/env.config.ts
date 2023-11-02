import { registerAs } from "@nestjs/config"

export default registerAs('env.config', () => {
    return {
        DATABASE: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USERNAME,
            pasword: process.env.DB_PASSWORD,
            database: process.env.DATABASE_NAME
        }
    }
})