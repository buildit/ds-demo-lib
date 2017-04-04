const fs = require('fs');
const download = require('download');
const extract = require('extract-zip');
const brandai = require('../brandai.config').default.brandai;
const frontify = require('../brandai.config').default.frontify;
const chalk = require('chalk');
const log = console.log;

const assetsDir = 'src/assets';
const brandaiDir = `${assetsDir}/brandai`;
const frontifyDir = `${assetsDir}/frontify`;

// Brandai download
// The logos
log(`${chalk.white('Downloading logos from ')} ${chalk.blue(brandai.logos)}`);
download(brandai.logos)
  .then(data => {
    const out = `${brandaiDir}/logo.zip`
    fs.writeFileSync(out, data);
    extract(out, {dir: brandaiDir}, (err) => {
      if (err) {
        log(chalk.red.dim('Error downloading logos '), chalk.red(err));
      } else {
        log(chalk.green.dim('Logo unzip done'));
      }
      fs.unlinkSync(out);
    });
    log(chalk.green.dim('Done downloading logos'));
  });

download(brandai.styles)
  .then(data => {
    const out = `${brandaiDir}/styles.less`
    fs.writeFileSync(out, data);
    log(chalk.green.dim('Done downloading styles'));
  });

// Frontify download
log(`${chalk.white('Downloading Frontify devkit from ')} ${chalk.blue(frontify.devkit)}`);
download(frontify.devkit).then(data => {
  const out = `${frontifyDir}/frontify.zip`
  fs.writeFileSync(out, data);
  extract(out, {dir: frontifyDir}, (err) => {
    if (err) {
      log(chalk.red.dim('Error downloading Frontify devkit: '), chalk.red(err));
    } else {
      log(chalk.green.dim('Frontify devkit extracted'));
    }
    fs.unlinkSync(out);
  });
  log(chalk.green.dim('Done downloading Frontify devkit'));
});

log(`${chalk.white('Downloading Frontify logo from ')} ${chalk.blue(frontify.logo)}`);
download(frontify.logo, frontifyDir).then(data => {
  log(chalk.green.dim('Done downloading Frontify logo'));
});
