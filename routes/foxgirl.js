const akaneko = require("akaneko")
module.exports = {
  name: "images/foxgirl",
  run: async(req, res) => {
    var image = await akaneko.foxgirl()
    res.json({
      message: image
    })
  }
}