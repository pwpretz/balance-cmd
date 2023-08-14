bot.chat("/bal")
      bot.on("messagestr", async (message) => {
        msg = await message
        if (msg.split(' ')[0] === "Balance:") {
          bot.chat("Balance is " + msg.split(' ')[1])
        }
})
