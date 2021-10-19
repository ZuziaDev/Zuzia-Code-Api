module.exports = {
  name: "sfw",
  run: async(req, res) => {
      res.json({
     "sfw": [
    "GET /hug",
    "GET /kiss",
    "GET /slap",
    "GET /punch",
    "GET /wink",
    "GET /pat",
    "GET /kill",
    "GET /cuddle",
    "GET /waifu"
    ]
    })
  }
}