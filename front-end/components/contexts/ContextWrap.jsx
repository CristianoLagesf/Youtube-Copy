import { useEffect, useState } from "react";
import { themes } from "./ThemeContext";


export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.dark)
  function changeTheme(theme) {
    setTheme(theme)
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document
        break;
    
      default:
        break;
    }
  },[])
}