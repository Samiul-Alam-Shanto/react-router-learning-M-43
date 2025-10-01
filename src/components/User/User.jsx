import React, { Suspense, useState } from "react";
import { Link, Navigate } from "react-router";
import UserDetails2 from "../UserDetails2/UserDetails2";

const User = ({ user }) => {
  const { name, email, phone, id } = user;

  const [showInfo, setShowInfo] = useState(false);
  const [visitHome, setVisitHome] = useState(false);

  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());

  if (visitHome) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="flex flex-col border rounded-xl p-2 bg-lime-200 text-black">
      <h3 className="font-bold text-3xl">{name}</h3>
      <p className="font-medium text-xl">{email}</p>
      <small>{phone}</small>
      <Link to={`/users/${id}`}>Show Details</Link>
      <button onClick={() => setShowInfo(!showInfo)} className="text-white">
        {showInfo ? "Hide" : "Show More"}
      </button>

      {showInfo && (
        <Suspense fallback={"Loading........"}>
          <UserDetails2 userPromise={userPromise}></UserDetails2>
        </Suspense>
      )}

      <button className="text-white" onClick={() => setVisitHome(true)}>
        Go Home
      </button>
    </div>
  );
};

export default User;
