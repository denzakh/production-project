import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { classNames } from "../helpers/classNames/classNames";
import AboutPageAsync from "../pages/AboutPage/AboutPageAsync";
import MainPageAsync from "../pages/MainPage/MainPageAsync";
import "../styles/index.scss";
import { useTheme } from "./theme/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <div>
        <Link to={"/"}>Главная</Link>
        <Link to={"/about"}>О сайте</Link>
      </div>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}
