import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { theme } from "./utils/themes";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// import ContextProvider from "./context/state";

const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
      <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();