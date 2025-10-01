import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const userInfo = useLoaderData();
  console.log(userInfo);
  return (
    <div>
      <h3>Name: {userInfo.name}</h3>
      <h5>Website: {userInfo.website}</h5>
    </div>
  );
};

export default UserDetails;
