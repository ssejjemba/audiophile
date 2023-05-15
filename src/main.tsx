import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import App from "./App.tsx";
import { CategoryHeadphones } from "./pages/categories/Category.tsx";
import { CategorySpeakers } from "./pages/categories/Category.tsx";
import { CategoryEarphones } from "./pages/categories/Category.tsx";
import productData from "./data/product.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${productData[0].productURL}`,
    element: <CategoryEarphones />,
  },
  {
    path: `${productData[1].productURL}`,
    element: <CategoryHeadphones />,
  },
  {
    path: `${productData[2].productURL}`,
    element: <CategorySpeakers />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
