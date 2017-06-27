import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withComments } from '@buildit/storybook-addon-blabbr';
import infoAddon from '@storybook/addon-info';

// import '../src/vanilla.less';
import '../src/unicorn-inc.less';
// import '../src/taco-bank.less';

setAddon(infoAddon);

addDecorator(withKnobs);
addDecorator(withComments);

const req = require.context('../stories', true, /\.js$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
