import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, Box } from "@chakra-ui/react";

import Home from './pages/Home';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
      <ApolloProvider client={client}>
      <Router>
        <Container>
          <Box w="500px" h="500px">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
            </Routes>
          </Box>
        </Container>
      </Router>
   </ApolloProvider>
  );
}

export default App;
