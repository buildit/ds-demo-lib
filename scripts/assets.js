const fs = require('fs');
const download = require('download');
const extract = require('extract-zip');
const brandai = require('../brandai.config').default.brandai;
const frontify = require('../brandai.config').default.frontify;
const chalk = require('chalk');
const log = console.log;

const assetsDir = './downloads';
const brandaiDir = `${assetsDir}/brandai`;
const frontifyDir = `${assetsDir}/frontify`;
const targetDir = 'src/assets';

// Brandai download
// The logos
log(`${chalk.white('Downloading logos from ')} ${chalk.blue(brandai.logos)}`);
download(brandai.logos).then(data => {
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
})
.then(() => {
  log(chalk.white('Copying brand.ai assets'));
  fs.createReadStream(`${brandaiDir}/styles.less`).pipe(fs.createWriteStream(`${targetDir}/styles.less`));
});

download(brandai.styles).then(data => {
  const out = `${brandaiDir}/styles.less`
  fs.writeFileSync(out, data);
  log(chalk.green.dim('Done downloading styles'));
})
.then(() => {
  log(chalk.white('Copying brand.ai styles'));
  fs.createReadStream(`${brandaiDir}/unicorn_inc.png`).pipe(fs.createWriteStream(`${targetDir}/unicorn_inc.png`));
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
})
.then(() => {
  log(chalk.white('Copying Frontify devkit assets'));
});

log(`${chalk.white('Downloading Frontify logo from ')} ${chalk.blue(frontify.logo)}`);
download(frontify.logo).then(data => {
  fs.writeFileSync(`${frontifyDir}/unicorn-logo.png`, data);
  log(chalk.green.dim('Done downloading Frontify logo'));
})
.then(() => {
  log(chalk.white('Copying Frontify logo'));
});
