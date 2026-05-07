const axios = require("axios");
const { Jimp } = require("jimp");
const jsQR = require("jsqr");

async function readQRCode(imageUrl) {
  const response = await axios.get(imageUrl, {
    responseType: "arraybuffer",
  });

  const image = await Jimp.read(response.data);
  const { data, width, height } = image.bitmap;

  const qr = jsQR(new Uint8ClampedArray(data), width, height);

  if (!qr || !qr.data) {
    return null;
  }
  return qr.data;
}

module.exports = {
  readQRCode,
};
