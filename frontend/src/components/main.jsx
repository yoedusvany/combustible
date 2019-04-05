import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Empresa from './empresa/empresa';
import TipoV from './tipov/tipov';


class Main extends Component {
    state = {  }
    render() { 
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Empresa} />
                    <Route path="/empresa" component={Empresa} />
                    <Route path="/tipov" component={TipoV} />
                </Switch>
            </Router>
        );
    }
}
 
export default Main;