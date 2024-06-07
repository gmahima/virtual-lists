"use client"
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
    uri: 'https://flyby-router-demo.herokuapp.com/',
    cache: new InMemoryCache(),
  });
import React, { useState } from "react";
const postQuery = `query Feed(
  $first: Int!,
  $after: String
) {
  feed(
    first: $first,
    after: $after,
  ) {
    edges {
      node {
        id,
        title,
        subtitle
      }
    },
    pageInfo {
      endCursor
    }
  }
}`;
const fetchNames = async (after) => {
  const url = "https://gql.hashnode.com";
  const variables = {
    first: 10,
    after,
  };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: postQuery, variables }),
  };
  console.log("called fetchNames");
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("data.data", data.data);
    const names = data.data.feed.edges.map((edge) => ({
      id: edge.node.id,
      title: edge.node.title, // Use title or subtitle if available
    }));
    const endCursor = data.data.feed.pageInfo.endCursor;
    console.log("Fetched names:", names);
    return { names, endCursor };
  } catch (error) {
    console.error("Error fetching names:", error);
  }
};
export default function App() {
  const [names, setNames] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [endCursor, setEndCursor] = useState(undefined);
  const loadNames = async () => {
    setIsLoading(true);
    const loadedNamesData = await fetchNames(endCursor);
    console.log(loadedNamesData);
    if (loadedNamesData) {
      setNames((names) => [...names, ...loadedNamesData.names]);
      setEndCursor(loadedNamesData.endCursor);
      setIsLoading(false);
    }
  };
  return (
    <div className="h-screen p-16">
      <div className="">
              <button
                  className="bg-white  p-4 rounded shadow"
          onClick={() => {
            loadNames();
          }}
        >
          load names
        </button>
      </div>
      <ul className="h-40 bg-gray-50 p-4 mt-4 rounded overflow-auto">
        {names &&
          names?.length > 0 &&
          names.map((name) => <li key={name.id}>{name.title}</li>)}
        {isLoading && <li>loading</li>}
      </ul>
    </div>
  );
}
