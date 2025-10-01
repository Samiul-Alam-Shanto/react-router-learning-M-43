import React from "react";
import { Link } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;
  return (
    <div className="border mt-2 rounded-xl">
      <h4>{title}</h4>
      <Link to={`/posts/${id}`}>
        <button className="mt-2">Show Details</button>
      </Link>
    </div>
  );
};

export default Post;
