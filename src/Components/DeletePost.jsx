import React, { useEffect } from "react";

const DeletePost = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/3", {
      method: "DELETE",
    });
  }, []);
  return (
  <div>
      
  </div>
  );
};

export default DeletePost;
