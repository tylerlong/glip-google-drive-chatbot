import createApp from 'ringcentral-chatbot/dist/apps'
import googleDriveSkill from 'ringcentral-chatbot-skill-google-drive'
import axios from 'axios'

const handle = async event => {
  // event handling code
}

const app = createApp(handle, [
  googleDriveSkill
])
app.listen(process.env.RINGCENTRAL_CHATBOT_EXPRESS_PORT)

setInterval(() => axios.put(`${process.env.RINGCENTRAL_CHATBOT_SERVER}/google/refresh-subscriptions`), 3600000)
