// Import the required crypto library for hashing (works in Node.js)
const crypto = require('crypto');

// UUID string
const uuidString = '91b86d0c-86cb-4124-a8b2-edee107de454';

// Step 1: Hash the UUID using SHA256
const hash = crypto.createHash('sha256').update(uuidString).digest('hex');

// Step 2: Convert the hexadecimal hash to a numeric value
const numericValue = BigInt('0x' + hash).toString();

// Optionally, limit the numeric value to a specific length (e.g., 16 digits)
const limitedNumericValue = numericValue.slice(0, 16);

console.log(limitedNumericValue);
