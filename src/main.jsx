import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/about",
        element: <About/>
      },
    ],
    errorElement: <Error/>
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
