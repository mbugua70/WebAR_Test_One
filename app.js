// app.js
const argv = require('yargs').argv;

const imagePath = argv.i;

if (imagePath) {
  console.log(`Image path provided: ${imagePath}`);
} else {
  console.log('No image path provided. Use -i to specify an image path.');
}
