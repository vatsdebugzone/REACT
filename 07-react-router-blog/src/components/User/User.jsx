import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://api.github.com/users/hiteshchoudhary")
      .then((res) => res.json())
      .then((res) => {
        console.log(res), setUser(res);
      });
  }, []);

  return (
    <div className="w-full text-center py-4 justify-center space-x-2 bg-gray-300">
      <h3>User Information</h3>
      <div className="flex flex-grid text-center">
        <div className="flex flex-row text-center justify-center"> Followers : {user?.followers}</div>
      </div>
    </div>
  );
};

export default User;
