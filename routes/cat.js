const fetch = require("node-fetch")
module.exports = {
  name: "images/cat",
  run: async(req, res) => {
    const url = 'https://api-deglas.ml/cats/';
    const { message } = await fetch(url).then(r => r.json());
    res.json({
      message
    })
  }
}
