import React, { Component } from 'react';
import './App.css';

//GRAPHQL
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";


//COMPONENTS
import Header from './components/header';
//import Main from './components/main';
import AppRoutes from './components/approutes'


//ROUTING
import { Switch, BrowserRouter as Router } from 'react-router-dom'


const client = new ApolloClient({
  uri: "http://localhost:4000"
});


class App extends Component {
  render() {
    return (
      <Router>
        <ApolloProvider client={client}>
          <div className="App">
            <Header/>
            <AppRoutes/>
          </div>
        </ApolloProvider>
      </Router>

        

  
    );
  }
}

export default App;
