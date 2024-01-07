import "./App.css";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import UserContextProvider from "./Context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <h1 className="w-full text text-white bg-gray-500 text-center justify-center">
        Context API{" "}
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;
