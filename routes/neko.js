const akaneko = require("akaneko")
module.exports = {
  name: "images/neko",
  run: async(req, res) => {
    var image = await akaneko.neko()
    res.json({
      message: image
    })
  }
}