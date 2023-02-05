
const { GarminConnect } = require('garmin-connect')
const GCClient = new GarminConnect()

module.exports = async () => {
    await GCClient.login()
    const userInfo = await GCClient.getUserInfo();
    console.log(userInfo.emailAddress)
  }