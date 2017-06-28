const path = require('path');
const fs = require('fs-extra');
const version = require('../package.json').version;

const srcDir = path.resolve(__dirname, '../storybook-static');
const versionsDir = path.resolve(__dirname, `../storybook-hosted`);
const targetDir = `${versionsDir}/${version}`;
const configFile = `${versionsDir}/storybook-config.json`;

// First move the directory
fs.moveSync(srcDir, targetDir, { overwrite: true });
// Now edit the config
