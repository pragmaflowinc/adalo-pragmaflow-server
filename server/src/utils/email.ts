import { createTransport } from 'nodemailer'
import { EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } from './config'

// Limits to be able to send bulk mails to MailTrap
const limiting = {
    pool: true,
    rateLimit: 3,
    rateDelta: 20_000,
    maxConnections: 1,
    maxMessages: 3,
}

const transportData = {
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: true, // use TLS
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
}

//const dataToUse = ENVIRONMENT !== 'app' ? Object.assign(transportData, limiting) : transportData

export const mailClient = createTransport(transportData)

export const getReturnPathOptions = (toEmail: string) => ({
    headers: {
        'Return-Path': '<info@pragmaflow.com>',
    },
    envelope: {
        'from': '<info@pragmaflow.com>',
        'to': toEmail
    }
})
