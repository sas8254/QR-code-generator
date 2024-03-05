const express = require("express");
const qr = require("qrcode");
const { createCanvas, loadImage } = require("canvas");

const app = express();
const port = 3300;

app.get("/generate", async (req, res) => {
  const data = req.query.data;
  if (!data) {
    return res.status(400).json({ error: "Data parameter is missing." });
  }

  // Create a canvas to generate the QR code
  const canvas = createCanvas(200, 200);
  const ctx = canvas.getContext("2d");

  // Generate the QR code on the canvas
  await qr.toCanvas(canvas, data, { errorCorrectionLevel: "H", scale: 10 });

  const logo = await loadImage("./eats.jpg");

  // Calculate the position to center the logo on the QR code
  const logoSize = 80; // Adjust the size as needed
  const x = (canvas.width - logoSize) / 2;
  const y = (canvas.height - logoSize) / 2;

  // Draw the company logo on the QR code
  ctx.drawImage(logo, x, y, logoSize, logoSize);

  // Set the response headers
  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Disposition": "attachment; filename=qrcode.png",
  });

  // Send the QR code as a stream directly without saving it
  const stream = canvas.createPNGStream();
  stream.pipe(res);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
