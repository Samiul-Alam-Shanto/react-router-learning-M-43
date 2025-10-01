import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  //   console.log(post);

  const navigate = useNavigate();
  return (
    <div>
      <h2> {post.body}</h2>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default PostDetails;
