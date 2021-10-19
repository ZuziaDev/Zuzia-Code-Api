const Anime_Images = require('anime-images-api');
const API = new Anime_Images();
module.exports = {
  name: "sfw/cuddel",
  run: async (req, res) => {
    var random = await API.sfw.cuddel()
    res.json({
      url: random
    })
  }
}