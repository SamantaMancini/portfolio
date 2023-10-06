import { useContext } from "react";
import { ThemeContext } from "./Theme";

// Custom hook to easily access the theme context values
export const useThemeContext = () => {
    // Use the useContext hook to access the theme context
    const context = useContext(ThemeContext);
    return context;
  }