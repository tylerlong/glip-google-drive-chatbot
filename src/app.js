import createApp from 'ringcentral-chatbot/dist/apps'
import googleDriveSkill from 'ringcentral-chatbot-skill-google-drive'

const handle = async event => {
  if (event.type === 'Message4Bot' && event.text.toLowerCase() === 'about') {
    const { bot, group } = event
    await bot.sendMessage(group.id, { text: `
I am a Glip chatbot to notice you events about files added/trashed in your Google Drive account.
I am created by ![:Person](850957020). My source code is [here](https://github.com/tylerlong/glip-google-drive-chatbot).
Please reply "help" if you don't know how to start. Remember to mention me if this is not a one-one conversation between you and me.
`.trim() })
  }
}

const app = createApp(handle, [googleDriveSkill])

export default app
