import React from "react";
import { useLoaderData, useParams } from "react-router";

const UserDetails = () => {
  const userInfo = useLoaderData();
  // console.log(userInfo);

  // const params = useParams();
  // console.log(params);
  // console.log(params.userId);
  const { userId } = useParams();
  return (
    <div>
      <h2>{userId}</h2>
      <h3>Name: {userInfo.name}</h3>
      <h5>Website: {userInfo.website}</h5>
    </div>
  );
};

export default UserDetails;
