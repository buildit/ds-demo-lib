import React from 'react';
import { configure, setAddon, addDecorator } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import { withComments } from '@buildit/storybook-addon-blabbr';
import InfoAddon from '@buildit/storybook-addon-info';
import '../src/vanilla.less';

setAddon(InfoAddon);

addDecorator(withKnobs);
addDecorator(withComments);
addDecorator((story) => (
	<div style={{padding: '10px'}}>
		{story()}
	</div>
));

function loadStories() {
  require('../stories/button');
  require('../stories/header');
  require('../stories/footer');
}

configure(loadStories, module);
