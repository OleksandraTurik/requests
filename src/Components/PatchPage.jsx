import React, { useEffect, useState } from "react";

const PatchPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      body: JSON.stringify({
        title: "new Patch",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
  <div>
      {posts.title} {posts.body}
  </div>
  
  );
};

export default PatchPage;
