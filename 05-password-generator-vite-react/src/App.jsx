import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numericAllowed, setNumericAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numericAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()}{/";
    for (let index = 0; index < length; index++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numericAllowed, characterAllowed]);

  const copyTextToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  };

  useEffect(() => {
    generatePassword();
  }, [length, numericAllowed, characterAllowed]);

  return (
    <>
      {/* <h1 className="text-xl3"> Password Generator</h1> */}
      <div className="w-full max-w-lg mx-auto  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-end px-4 pt-4"></div>
        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Password Generator
          </h5>

          <div className="w-80 flex justify-center mt-4 md:mt-6">
            <input
              type="text"
              placeholder="Password"
              value={password}
              className="outline-none w-full rounded-s-lg py-1 px-3"
              readOnly
              ref={passwordRef}
            />

            <button
              className="w-20 h-10 outline-none rounded-e-lg bg-blue-700 px-3 py-0.5 shrink-0"
              onClick={copyTextToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="w-50 flex items-center gap-x-1 mt-4">
            <div>
              <input
                type="range"
                name=""
                min={6}
                max={20}
                id=""
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="length" className=" text-sky-300">
                Length : {length}
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={numericAllowed}
                onChange={() => {
                  setNumericAllowed((prev) => !prev);
                }}
                name=""
                id="numericAllowed"
              />
              <label htmlFor="numeric" className=" text-sky-300">
                Numeric
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked={characterAllowed}
                onChange={() => {
                  setCharacterAllowed((prev) => !prev);
                }}
                name=""
                id="characterAllowed"
              />
              <label htmlFor="numeric" className=" text-sky-300">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
