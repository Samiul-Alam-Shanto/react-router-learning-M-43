import React from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  const { name, email, phone, id } = user;
  return (
    <div className="flex flex-col border rounded-xl p-2 bg-lime-200 text-black">
      <h3 className="font-bold text-3xl">{name}</h3>
      <p className="font-medium text-xl">{email}</p>
      <small>{phone}</small>
      <Link to={`/users/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
