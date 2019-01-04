import createApp from 'ringcentral-chatbot/dist/apps'
import googleDriveSkill from 'ringcentral-chatbot-skill-google-drive'
import axios from 'axios'

const app = createApp(undefined, [googleDriveSkill])
app.listen(process.env.RINGCENTRAL_CHATBOT_EXPRESS_PORT)

setInterval(async () => {
  await axios.put(`${process.env.RINGCENTRAL_CHATBOT_SERVER}/admin/maintain`, undefined, { auth: {
    username: process.env.RINGCENTRAL_CHATBOT_ADMIN_USERNAME,
    password: process.env.RINGCENTRAL_CHATBOT_ADMIN_PASSWORD
  } })
  await axios.put(`${process.env.RINGCENTRAL_CHATBOT_SERVER}/google/refresh-subscriptions`)
}, 3600000)
