import React from 'react';
import ReactDOM from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import App from './app';

import './assets/styes/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

library.add(fab, fas, far);

ReactDOM.render(<App />, document.getElementById('root'));
