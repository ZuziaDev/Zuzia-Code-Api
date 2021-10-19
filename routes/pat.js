const Anime_Images = require('anime-images-api');
const API = new Anime_Images();
module.exports = {
  name: "sfw/pat",
  run: async (req, res) => {
    var random = await API.sfw.pat()
    res.json({
      url: random
    })
  }
}