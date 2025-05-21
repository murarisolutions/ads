import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloSetup from '../ApolloSetup'; 

ReactDOM.render(
  <ApolloSetup>
    <App />
  </ApolloSetup>,
  document.getElementById('root')
);
