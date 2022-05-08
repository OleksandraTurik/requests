import React, { useEffect, useState } from "react";

const PutPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/2", {
      method: "PUT",
      body: JSON.stringify({
        userId: 1,
        title: "post page",
        body: "test",
        number: "New number",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return <div></div>;
};

export default PutPage;
