import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <h1>No User Found</h1>;
  return <div>Profile : {user?.username}</div>;
};

export default Profile;
