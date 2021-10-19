const Anime_Images = require('anime-images-api');
const API = new Anime_Images();
module.exports = {
  name: "sfw/wink",
  run: async (req, res) => {
    var random = await API.sfw.wink()
    res.json({
      url: random
    })
  }
}