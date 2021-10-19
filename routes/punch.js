const Anime_Images = require('anime-images-api');
const API = new Anime_Images();
module.exports = {
  name: "sfw/punch",
  run: async (req, res) => {
    var random = await API.sfw.punch()
    res.json({
      url: random
    })
  }
}