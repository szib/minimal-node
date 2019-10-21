const { exec } = require('pkg');

const run = async () => await exec(['build/app.js', '--output', 'bin/app']);

run();
