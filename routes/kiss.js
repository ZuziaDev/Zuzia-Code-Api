const Anime_Images = require('anime-images-api');
const API = new Anime_Images();
module.exports = {
  name: "sfw/kiss",
  run: async (req, res) => {
    var random = await API.sfw.kiss()
    res.json({
      url: random
    })
  }
}