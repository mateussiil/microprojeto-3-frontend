import React from 'react';
import { Route } from 'react-router-dom';

import Login from './pages/login';
import Empresa from './pages/empresa';
import Cliente from './pages/cliente';
import CadastroNovoItem from './pages/cadastrarnovoitem';

const Routes = () => {
  return (
      <div className="layout-main">
        <Route path='/' exact component={Login} />
        <Route path='/empresa' exact component={Empresa} />
        <Route path='/cliente' exact component={Cliente} />
        <Route path='/cadastrarnovoitem' exact component={CadastroNovoItem} />
      </div>
  )
}

export default Routes;