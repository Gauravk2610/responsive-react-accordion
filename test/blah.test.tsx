import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Accordion } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Accordion
        title="This is an accordion"
        content="This is hell awesome"
        spacing={10}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
