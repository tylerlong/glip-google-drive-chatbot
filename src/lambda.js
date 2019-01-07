import serverlessHTTP from 'serverless-http'
import { createAsyncProxy } from 'ringcentral-chatbot/dist/lambda'
import axios from 'axios'
import express from 'express'

import app from './app'

module.exports.app = serverlessHTTP(app)

// for google site verification
const filterApp = express()
filterApp.get('/google/webhook/googlece5a6e1d27e7fa99.html', (req, res) => {
  res.send('google-site-verification: googlece5a6e1d27e7fa99.html')
})

module.exports.proxy = createAsyncProxy('app', filterApp)

module.exports.maintain = async () => {
  await axios.put(`${process.env.RINGCENTRAL_CHATBOT_SERVER}/admin/maintain`, undefined, { auth: {
    username: process.env.RINGCENTRAL_CHATBOT_ADMIN_USERNAME,
    password: process.env.RINGCENTRAL_CHATBOT_ADMIN_PASSWORD
  } })
  await axios.put(`${process.env.RINGCENTRAL_CHATBOT_SERVER}/google/refresh-subscriptions`)
}
