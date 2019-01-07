import serverlessHTTP from 'serverless-http'
import { createAsyncProxy } from 'ringcentral-chatbot/dist/lambda'
import axios from 'axios'
import express from 'express'

import app from './app'

module.exports.app = serverlessHTTP(app)

// for google site verification
const filterApp = express()
filterApp.get(`/${process.env.GOOGLE_SITE_VERIFICATION}`, (req, res) => {
  res.send(`google-site-verification: ${process.env.GOOGLE_SITE_VERIFICATION}`)
})

module.exports.proxy = createAsyncProxy('app', filterApp)

module.exports.maintain = async () => {
  await axios.put(`${process.env.RINGCENTRAL_CHATBOT_SERVER}/admin/maintain`, undefined, { auth: {
    username: process.env.RINGCENTRAL_CHATBOT_ADMIN_USERNAME,
    password: process.env.RINGCENTRAL_CHATBOT_ADMIN_PASSWORD
  } })
  await axios.put(`${process.env.RINGCENTRAL_CHATBOT_SERVER}/google/refresh-subscriptions`)
}
