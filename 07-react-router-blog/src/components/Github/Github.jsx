import React from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  return (
    <div className="w-full text-center py-4 justify-center space-x-2 bg-gray-200">
      <h3>User Information</h3>
      <div className="flex flex-grid text-center">
        <img
          src={data?.avatar_url}
          alt="No Image Founde"
          className="w-200 h-200"
        />
        <div className="flex flex-row text-center justify-center">
          Followers : {data?.followers}
        </div>
      </div>
    </div>
  );
};

export default Github;

export const githubLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
