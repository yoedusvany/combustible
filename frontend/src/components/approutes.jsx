import React from 'react';
import { Route} from 'react-router-dom';

//COMPONENTS

import Empresa from './empresa/empresa';
import TipoV from './tipov/tipov';
import Home from './home';

const AppRoutes = () => 
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/empresa" component={Empresa} />
        <Route path="/tipov" component={TipoV} />
    </div>

export default AppRoutes;