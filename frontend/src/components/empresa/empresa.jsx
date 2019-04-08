import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Table, Button } from 'react-bootstrap';

const GET_EMPRESAS = gql`
  {
    getEmpresas {
        nombre
        id
    }
  }
`;


class Empresa extends Component {
         
  render() {

    return (
        <Query query={GET_EMPRESAS}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return (

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.getEmpresas.map((empresa,index) => (
                            <tr key={empresa.id}>
                                <td>{index+1}</td>
                                <td>{empresa.nombre}</td>
                                <td>
                                    <Button variant="primary" onClick={this.onOpenModal}>Primary</Button>
                                </td>
                            </tr>

                            
                        ))}
                           
                        </tbody>
                    </Table>
                    
                )
            }}
        </Query>
  
    );
  }
}

export default Empresa;