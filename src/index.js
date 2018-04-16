import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

import Theme from './materialize';
import Switches from './switch/switch';

function AppwithTheme() {
    return (
      <MuiThemeProvider theme={Theme}>
        <App />
      </MuiThemeProvider>
    );
  }


// render(<App />, document.querySelector('#app'));
ReactDOM.render(<AppwithTheme/>, document.getElementById('root'));
registerServiceWorker();





