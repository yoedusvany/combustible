import React, { Component } from 'react'
import { graphql } from 'react-apollo';
//import Empresa from './Empresa'
import gql from 'graphql-tag';

const query = gql`
  {
    getEmpresas{
      id
      nombre
    }
  }
`

class EmpresaList extends Component {
  displayEmpresas(){
    let data = this.props.data;

    if(data.loading){
      return (<div>loading</div>)
    }else{
      return data.getEmpresas.map(empresa =>{
        return (
          <li key={empresa.id}>{ empresa.nombre} </li>
        )
      });
    }
  }
  render() {
    return (
       <div>
         <ul>
           { this.displayEmpresas() }
         </ul>
       </div>
    )
  }
}

export default graphql(query)(EmpresaList)