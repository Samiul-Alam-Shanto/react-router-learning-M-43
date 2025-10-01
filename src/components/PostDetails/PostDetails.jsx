import React from "react";
import { useLoaderData } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  console.log(post);
  return (
    <div>
      <h2> {post.body}</h2>
    </div>
  );
};

export default PostDetails;
