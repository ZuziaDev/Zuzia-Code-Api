const fetch = require("node-fetch")
module.exports = {
  name: "images/cat",
  run: async(req, res) => {
    const url = 'https://anime-api.hisoka17.repl.co/img/waifu';
    const { message } = await fetch(url).then(r => r.json());
    res.json({
      message
    })
  }
}
//