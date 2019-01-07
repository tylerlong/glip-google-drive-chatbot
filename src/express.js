import axios from 'axios'

import app from './app'

// for google site verification
app.get(`/${process.env.GOOGLE_SITE_VERIFICATION}`, (req, res) => {
  res.send(`google-site-verification: ${process.env.GOOGLE_SITE_VERIFICATION}`)
})

app.listen(process.env.RINGCENTRAL_CHATBOT_EXPRESS_PORT)

setInterval(async () => {
  await axios.put(`${process.env.RINGCENTRAL_CHATBOT_SERVER}/admin/maintain`, undefined, { auth: {
    username: process.env.RINGCENTRAL_CHATBOT_ADMIN_USERNAME,
    password: process.env.RINGCENTRAL_CHATBOT_ADMIN_PASSWORD
  } })
  await axios.put(`${process.env.RINGCENTRAL_CHATBOT_SERVER}/google/refresh-subscriptions`)
}, 3600000)
