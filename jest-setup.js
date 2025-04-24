console.log("jest-setup.js is running!"); // Add this line
if (typeof window === 'undefined') {
    global.window = {};
}
if (!global.TextEncoder) {
    global.TextEncoder = require('text-encoding').TextEncoder;
}
 if (!global.TextDecoder) {
    global.TextDecoder = require('text-encoding').TextDecoder;
}