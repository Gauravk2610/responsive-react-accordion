import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Accordion } from '../.';

const App = () => {
  return (
    <div>
      <Accordion />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
