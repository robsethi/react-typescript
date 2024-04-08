import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{ backgroundColor: theme.primary.text, color: theme.primary.text }}
    >
      Theme context
    </div>
  );
};
