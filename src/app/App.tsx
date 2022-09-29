import { Link } from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";

import "./styles/index.scss";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "./providers/router";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <div>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О сайте</Link>
      </div>
      <AppRouter></AppRouter>
    </div>
  );
}
