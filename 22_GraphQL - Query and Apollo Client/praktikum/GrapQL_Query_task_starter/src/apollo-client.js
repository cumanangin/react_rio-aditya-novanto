import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://react-todo127.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret' : 'GSlkvtfBSANIyYaBSoaL2937CtZktG7aDM5S333rBr8me44KJ3IwmO7XykZV56vB',
  },
});

export default client;
