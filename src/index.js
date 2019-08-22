import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import Page from './components/Page';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Page />, document.getElementById('root'));

serviceWorker.unregister();