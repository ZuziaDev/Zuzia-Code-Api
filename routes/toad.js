const fetch = require("node-fetch")
module.exports = {
  name: "images/toad",
  run: async (req, res) => {
    const url = 'https://api-deglas.ml/toad/';
    const { message } = await fetch(url).then(r => r.json());
    res.json({
      message
    })
  }
}