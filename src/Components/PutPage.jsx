import React, { useEffect, useState } from "react";

const PutPage = () => {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify({
        userId: 1,
        title: 'post page',
        body: 'test',
        number: 'New number'
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
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

export default PutPage;
