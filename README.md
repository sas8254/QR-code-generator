# QR Code Generator with Logo

This Node.js application generates QR codes with an embedded logo using the Express framework, qrcode library, and canvas. This is a simple web server that exposes an endpoint for generating QR codes with logos.

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sas8254/QR-code-generator.git
   cd your-repo
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node app.js
   ```

2. Access the QR code generation endpoint:

   ```
   http://localhost:3300/generate?data=YOUR_DATA
   ```

   Replace `YOUR_DATA` with the actual data you want to encode in the QR code.

3. The server will respond with a PNG image containing the QR code with the specified data and an embedded logo.

## Parameters

- **data**: The data parameter is required and represents the information you want to encode in the QR code.

## Customization

- You can customize the size and appearance of the QR code by adjusting the parameters passed to `qr.toCanvas`.
- Change the `logoSize` variable to adjust the size of the embedded logo.
- Replace the logo file path in `await loadImage("./eats.jpg");` with your own logo file path.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- This application utilizes the [Express](https://expressjs.com/) framework for handling HTTP requests.
- QR code generation is powered by the [qrcode](https://www.npmjs.com/package/qrcode) library.
- Image manipulation is done using the [canvas](https://www.npmjs.com/package/canvas) library.

Feel free to contribute and improve this project!
