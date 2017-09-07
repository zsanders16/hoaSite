import React from 'react';
import ReactDOM from 'react-dom';
import BeforeAppSetup from './components/BeforeAppSetup';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'semantic-ui-css/semantic.min.css';



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BeforeAppSetup />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

