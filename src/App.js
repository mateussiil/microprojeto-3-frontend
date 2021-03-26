import React from 'react';
import { HashRouter } from 'react-router-dom'

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './layout/layout.scss';

import Routes from './routes';
import Global from './styles/global';

function App() {
  return (
      <HashRouter>
        <Global/>
        <Routes />
      </HashRouter>
  );
}

export default App;
