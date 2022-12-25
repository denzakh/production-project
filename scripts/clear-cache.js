// path/fs
const fs = require('fs');
const path = require('path');

const cacheDir = path.resolve(__dirname, '..', 'node_modules', '.cache');
fs.rmSync(cacheDir, { recursive: true, force: true });
