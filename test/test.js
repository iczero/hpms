#!/usr/bin/env node

var is_fine = true;

// is everything fine?
console.log('[INFO] Test started');
if (is_fine) {
    console.log('[INFO] Test succeeded');
    process.exit(0); // everything is fine
} else {
    console.log('[CRITICAL] Test failed!');
    process.exit(1); // something is not fine
}
