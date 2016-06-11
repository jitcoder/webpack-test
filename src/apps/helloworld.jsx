import React from 'react';
import ReactDOM from 'react-dom';
import OtherComponent from 'components/other-component';

import 'sass/hello.scss';

const Greeting = () => <div>Hello World 5</div>;

const contents = (
  <div>
    <Greeting />
    <br />
    <OtherComponent />
  </div>
);

ReactDOM.render(contents, document.getElementById('contents'));
