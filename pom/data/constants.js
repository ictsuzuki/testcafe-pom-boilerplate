import dotenv from 'dotenv'
dotenv.config()

export const BASE_URL = process.env.BASE_URL

export const CREDENTIALS = {
    VALID_USER:{
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_USER:{
        USERNAME: "invalid_user",
        PASSWORD: "wrongpassword"
    }
}

export const ERROR_MESSAGE = {
    INVALID_PASSWORD_ERROR_MSG: 'Epic sadface: Username and password do not match any user in this service'
}

export const HOME_PAGE_LABELS = {
    TITLE: "PRODUCTS"
}