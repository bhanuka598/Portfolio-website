import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import pluginConfig from "../config/plugins";
import Spinner from "../core-services/ui/Spinner";

// All available plugins
const allPlugins = {
  about:    lazy(() => import("../plugins/about")),
  projects: lazy(() => import("../plugins/projects")),
  skills:   lazy(() => import("../plugins/skills")),
  contact:  lazy(() => import("../plugins/contact")),
  blog:     lazy(() => import("../plugins/blog")),
  admin:    lazy(() => import("../plugins/admin")),
};

const AppShell = lazy(() => import("./AppShell"));

// Only load plugins enabled in plugins.js
const activeRoutes = pluginConfig.plugins
  .filter((name) => allPlugins[name])
  .map((name) => ({
    path: name === "about" ? "/" : `/${name}`,
    element: (
      <Suspense fallback={<Spinner />}>
        {(() => { const C = allPlugins[name]; return <C />; })()}
      </Suspense>
    ),
  }));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <AppShell />
      </Suspense>
    ),
    children: activeRoutes,
  },
]);

export default router;