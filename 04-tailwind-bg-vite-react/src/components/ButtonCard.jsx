import React, { useState } from "react";
import PropTypes from "prop-types";

const ButtonCard = (props) => {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center bg-white shadow-lg gap-3 px-3 py-2 rounded-full">
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-red-600 "
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black  bg-green-500 "
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black bg-yellow-500 "
              onClick={() => setColor("yellow")}
            >
              Yellow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

ButtonCard.propTypes = {};

export default ButtonCard;
