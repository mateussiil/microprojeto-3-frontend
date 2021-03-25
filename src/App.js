import React from 'react';
import { HashRouter } from 'react-router-dom'

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './layout/layout.scss';

import Routes from './routes';

function App() {
  return (
    <div style={{ height: '100%' }} >
      <HashRouter>
        <Routes />
      </HashRouter>
    </div>
  );
}

export default App;
