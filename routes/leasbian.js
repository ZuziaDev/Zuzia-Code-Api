const Anime_Images = require('anime-images-api');
const API = new Anime_Images();
module.exports = {
  name: "nsfw/lesbian",
  run: async (req, res) => {
    var random = await API.nsfw.lesbian()
    res.json({
      url: random
    })
  }
}