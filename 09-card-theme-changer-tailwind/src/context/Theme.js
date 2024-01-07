import { createContext, useContext } from "react";
const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

//for arrow functin change the file name to .jsx
export const useTheme = () => {
  return useContext(ThemeContext);
};

// export default function () {
//   return useContext(ThemeContext);
// }
