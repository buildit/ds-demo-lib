import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { text } from '@kadira/storybook-addon-knobs';

import { Button } from '../src';

storiesOf('Button', module)
  .addWithInfo(
    'simple usage',
    (<div>
        <h2>This is a JSX info section</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed ornare massa rutrum metus commodo, a mattis velit dignissim.
            Fusce vestibulum turpis sed massa egestas pharetra. Sed at libero
            nulla.</p>
        <p>
            <a
                href='https://github.com/'>
            This is a link</a>
        </p>
        <p>
            <img src="http://placehold.it/350x150" />
        </p>
    </div>),
    () => (
      <Button href={text('Button href', '#')}>
        {text('Button text', 'Click me!')}
      </Button>
    )
  );
