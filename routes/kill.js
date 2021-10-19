const Anime_Images = require('anime-images-api');
const API = new Anime_Images();
module.exports = {
  name: "sfw/kill",
  run: async (req, res) => {
    var random = await API.sfw.kill()
    res.json({
      url: random
    })
  }
}