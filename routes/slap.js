const Anime_Images = require('anime-images-api');
const API = new Anime_Images();
module.exports = {
  name: "sfw/slap",
  run: async (req, res) => {
    var random = await API.sfw.slap()
    res.json({
      url: random
    })
  }
}