import { useState, useEffect } from "react";
import React from "react";

export const GetPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPosts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {posts.map(posts => (
          <li key={posts.id}>
            {posts.title} {posts.body}
          </li>
        ))}
      </ul>
    );
  }
}
