import * as dotenv from 'dotenv'

dotenv.config();

if (!process.env.DATABASE_URL) { throw new Error('DATABASE_URL is missing')}
if (!process.env.DATABASE_NAME) { throw new Error('DATABASE_NAME is missing')}
if (!process.env.DATABASE_USERNAME) { throw new Error('DATABASE_USERNAME is missing')}
if (!process.env.DATABASE_PASSWORD) { throw new Error('DATABASE_PASSWORD is missing')}

export const DATABASE_URL = process.env.DATABASE_URL
export const DATABASE_NAME = process.env.DATABASE_NAME
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD