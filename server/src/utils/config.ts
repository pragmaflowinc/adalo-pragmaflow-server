import * as dotenv from 'dotenv'

dotenv.config();

if (!process.env.DATABASE_URL) { throw new Error('DATABASE_URL is missing')}
if (!process.env.DATABASE_NAME) { throw new Error('DATABASE_NAME is missing')}
if (!process.env.DATABASE_USERNAME) { throw new Error('DATABASE_USERNAME is missing')}
if (!process.env.DATABASE_PASSWORD) { throw new Error('DATABASE_PASSWORD is missing')}

if (!process.env.EMAIL_HOST) { throw new Error('EMAIL_HOST is missing')}
if (!process.env.EMAIL_PORT) { throw new Error('EMAIL_PORT is missing')}
if (!process.env.EMAIL_USER) { throw new Error('EMAIL_USER is missing')}
if (!process.env.EMAIL_PASS) { throw new Error('EMAIL_PASS is missing')}

export const DATABASE_URL = process.env.DATABASE_URL
export const DATABASE_NAME = process.env.DATABASE_NAME
export const DATABASE_USERNAME = process.env.DATABASE_USERNAME
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD

export const EMAIL_HOST = process.env.EMAIL_HOST
export const EMAIL_PORT = parseInt(process.env.EMAIL_PORT)
export const EMAIL_USER = process.env.EMAIL_USER
export const EMAIL_PASS = process.env.EMAIL_PASS

export const ENVIRONMENT = 'app'