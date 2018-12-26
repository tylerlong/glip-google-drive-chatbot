import createApp from 'ringcentral-chatbot/dist/apps'
import googleDriveSkill from 'ringcentral-chatbot-skill-google-drive'

const handle = async event => {
  // event handling code
}

const app = createApp(handle, [
  googleDriveSkill
])
app.listen(process.env.RINGCENTRAL_CHATBOT_EXPRESS_PORT)