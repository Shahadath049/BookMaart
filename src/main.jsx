import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root.jsx";
import Errorpage from "./components/Errorpage.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Projects from "./components/Projects";
import BookDetails from "./components/BookDetails";
import CartList from "./components/CartList";


// Define your routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/projects/:bookId",
        element: <BookDetails />,
        loader: () => fetch('/booksData.json'),
        errorElement: <Errorpage />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/resume",
        element: <CartList />,
        loader: () => fetch('/booksData.json'),
        errorElement: <Errorpage />,

      },
    ],
  },
  {
    path: "/*",
    element: <Errorpage />,
  },
]);

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Use RouterProvider instead of BrowserRouter */}
    <RouterProvider router={router} />
  </StrictMode>
);