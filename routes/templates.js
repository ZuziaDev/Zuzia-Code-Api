const deeznuts = require("../main/templates.json")
module.exports = {
  name: "templates/discord",
  run: async(req, res) => {
    let rand_deeznuts = deeznuts[Math.floor(Math.random() * deeznuts.length)]
    res.json({ templates: rand_deeznuts })
  }
}