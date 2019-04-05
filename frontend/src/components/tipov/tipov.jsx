import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Table } from 'react-bootstrap';

const GET_TIPOV = gql`
  {
    getTiposV {
        tipo
        id
    }
  }
`;


class Tipov extends Component {
  render() {
    return (
        <Query query={GET_TIPOV}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return (
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.getTiposV.map((tipo,index) => (
                            <tr key={tipo.id}>
                                <td>{index+1}</td>
                                <td>{tipo.tipo}</td>
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

export default Tipov;