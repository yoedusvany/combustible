import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar bg="primary" variant="dark">
                <Link className="navbar-brand" to="/">COMBUSTIBLE MANAGER</Link>
                
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/">Inicio</Link>
                    <Link className="nav-link" to="/empresa">Empresas</Link>
                    <Link className="nav-link" to="/tipov">Tipo de Vehiculos</Link>
                </Nav>
            </Navbar>
        );
    }
}
 
export default Header;