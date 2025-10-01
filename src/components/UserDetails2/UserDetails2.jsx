import React, { use } from "react";

const UserDetails2 = ({ userPromise }) => {
  const userDetails = use(userPromise);

  const { username, website } = userDetails;
  return (
    <div>
      <h2 className="font-bold text-xl">{username}</h2>
      <p>{website}</p>
    </div>
  );
};

export default UserDetails2;
