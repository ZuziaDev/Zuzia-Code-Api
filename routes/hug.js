const Anime_Images = require('anime-images-api');
const API = new Anime_Images();
module.exports = {
  name: "sfw/hug",
  run: async (req, res) => {
    var random = await API.sfw.hug()
    res.json({
      url: random
    })
  }
}