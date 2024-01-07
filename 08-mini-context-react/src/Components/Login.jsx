import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username,password});
  };

  return (
    <>
      <div>
        <div className="flex justify-center text-center bg-gray-500 py-2 space-x-2">
          <h1 className="text text-white">Login</h1>
        </div>
        <div className="flex justify-center text-center bg-gray-500 py-10 space-x-2">
          <input
            className="outline-none w-400  py-1 px-3"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <input
            className="outline-none w-400  py-1 px-3"
            type="text"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            onClick={handleSubmit}
            className="w-300 bg-blue-700 outline-none  px-2 py-0.1"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
