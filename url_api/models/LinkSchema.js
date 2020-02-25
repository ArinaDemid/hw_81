const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  shortUrl: {
    type: String,
    required: true
  },
  originalUrl: {
    type: String,
    required: true
  }
});

const LinkUrl = mongoose.model("LinkUrl", LinkSchema);

module.exports = LinkUrl;
