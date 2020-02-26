const express = require("express");
const nanoid = require("nanoid");
const LinkUrl = require("../models/LinkSchema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const urls = await LinkUrl.find();
    res.send(urls);
  } catch (error) {
    res.status(404).send({ message: "Not found urls in the db" });
  }
});

router.get("/:shortUrl", async (req, res) => {
  try {
    const url = await LinkUrl.find({ shortUrl: req.params.shortUrl });

    if (!url) {
      return res.status(404).send({ message: "Not found this shortUrl" });
    }
    res.redirect(301, url[0].originalUrl);
  } catch (error) {
    res.status(404).send({ message: "Not found" });
  }
});

router.post("/links", async (req, res) => {
  const linkData = req.body;

  if (!linkData.originalUrl) {
    return res
      .status(400)
      .send({ error: "URL must be present in the request" });
  }

  const nanoidShortUrl = nanoid(7);

  const findUrlInDB = await LinkUrl.find({ shortUrl: nanoidShortUrl });

  if (findUrlInDB.length === 0) {
    const linkForSave = new LinkUrl({
      shortUrl: nanoidShortUrl,
      originalUrl: linkData.originalUrl
    });

    try {
      const result = await linkForSave.save();
      res.send(result);
    } catch (error) {
      return res.status(400).send(error);
    }
  } else {
    return res.status(400).send({message: "ShortUrl with the same name already exists"});
  }
});

module.exports = router;
