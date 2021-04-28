require("dotenv/config");
var express = require("express");
var router = express.Router();
var axios = require("axios");

/* GET prices listing. */
router.get("/", async function (req, res, next) {
  let url = null;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    url = process.env.hostUrl;
} else {
    url = process.env.prodUrl;
}
  let data = null;
  try {
    const response = await axios.get(process.env.url + "/brands");
    data = await response.data;
  } catch (error) {
    res.send("inside catch");
  }
  if (!data) {
    res.send("error");
  }
  res.send(data);
});
module.exports = router;
