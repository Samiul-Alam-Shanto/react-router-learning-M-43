import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="border mt-2 rounded-xl">
      <h4>{title}</h4>
      <Link to={`/posts/${id}`}>
        <button className="mt-2">Show Details</button>
      </Link>
      <button onClick={handleNavigate}>Details of {id}</button>
    </div>
  );
};

export default Post;
