bot.on("messagestr", async (message) => {
      msg1 = await message;
      prefix = "$"
      msg = prefix = msg1
      if (msg.includes("bal") {
            bot.chat("/bal")
            bot.on("messagestr", async (message) => {
                  msg = await message
                  if (msg.split(' ')[0] === "Balance:") {
                      bot.chat("/m <name> Balance " + msg.split(' ')[1])
        }
      })
      })
})
