import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

export function AppRouter() {
  return (
    <Suspense fallback={<div>...</div>}>
      <div className="page-wrapper">
        <Routes>
          {Object.values(routeConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
}
