"use client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
  useLazyQuery,
} from "@apollo/client";
const client = new ApolloClient({
  uri: "https://gql.hashnode.com",
  cache: new InMemoryCache(),
});
import React, {useState} from "react";
const GET_POSTS = gql`
  query Feed($first: Int!, $after: String) {
    feed(first: $first, after: $after) {
      edges {
        node {
          id
          title
          subtitle
        }
      }
      pageInfo {
        endCursor
      }
    }
  }
`;
// const fetchNames = async (after) => {
//   const url = "https://gql.hashnode.com";
//   const variables = {
//     first: 10,
//     after,
//   };
//   const options = {
//     method: "POST",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({query: postQuery, variables}),
//   };
//   console.log("called fetchNames");
//   try {
//     const response = await fetch(url, options);
//     if (!response.ok) {
//       throw new Error(`Network response was not ok: ${response.statusText}`);
//     }
//     const data = await response.json();
//     console.log("data.data", data.data);
//     const names = data.data.feed.edges.map((edge) => ({
//       id: edge.node.id,
//       title: edge.node.title, // Use title or subtitle if available
//     }));
//     const endCursor = data.data.feed.pageInfo.endCursor;
//     console.log("Fetched names:", names);
//     return {names, endCursor};
//   } catch (error) {
//     console.error("Error fetching names:", error);
//   }
// };
export default function App() {
//   const [names, setNames] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [endCursor, setEndCursor] = useState(undefined);

  const [getPosts, {loading, error, data}] = useLazyQuery(GET_POSTS);

  //   const loadNames = async () => {
  //     setIsLoading(true);
  //     const loadedNamesData = await fetchNames(endCursor);
  //     console.log(loadedNamesData);
  //     if (loadedNamesData) {
  //       setNames((names) => [...names, ...loadedNamesData.names]);
  //       setEndCursor(loadedNamesData.endCursor);
  //       setIsLoading(false);
  //     }
  //   };
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="h-screen p-16">
      {console.log(data?.feed?.edges)}
      <div className="">
        <button
          className="bg-white  p-4 rounded shadow"
          onClick={() => {
            // loadNames();
            getPosts({variables: {first: 10}});
          }}
        >
          load names
        </button>
      </div>
      <ul className="h-40 bg-gray-50 p-4 mt-4 rounded overflow-auto">
        {data &&
          data.feed.edges.map((edge) => <li key={edge.node.title}>{edge.node.title}</li>)}
        {loading && <li>loading</li>}
      </ul>
    </div>
  );
}
