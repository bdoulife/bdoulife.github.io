import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

import './css/normalize.css';
import './css/index.css';

render(
	<App />,
	document.querySelector('#app')
)