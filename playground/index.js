import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import routes from './routes.js';

ReactDOM.render(<Router routes={routes} history={browserHistory}/>, document.getElementById('app'));