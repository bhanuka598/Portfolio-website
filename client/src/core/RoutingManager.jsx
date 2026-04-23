import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Spinner from "../core-services/ui/Spinner";

const AppShell = lazy(() => import("./AppShell"));
const Home = lazy(() => import("../plugins/about"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <AppShell />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;