import React, { useEffect, useState } from "react";

const PostPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: 'post page',
        body: 'test',
        userId: 1,
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);



  if (!posts.length) return null;
  return (
    <div>
        {posts.title}  {posts.body}
    </div>
  );
};

export default PostPage;
