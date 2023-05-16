import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import App from "./App.tsx";
import { CategoryHeadphones } from "./pages/categories/Category.tsx";
import { CategorySpeakers } from "./pages/categories/Category.tsx";
import { CategoryEarphones } from "./pages/categories/Category.tsx";
import { MarkIIHeadphonesSpecs } from "./pages/product-spec/ProductSpec.tsx";
import productData from "./data/product.json";
import gadgetData from "./data/data.json";
import { globalCss } from "../stitches.config.ts";

const router = createBrowserRouter([
  // Root Home Route
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  // Navigation Routes
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
  // Product Spec Routes
  {
    path: `${gadgetData[0].headphones?.[0].gadgetPageURL}`,
    element: <MarkIIHeadphonesSpecs />,
  },
]);

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    textDecoration: "none",
    boxSizing: "inherit",
  },
  body: {
    boxSizing: "border-box",
    background: "$white",
    fontFamily: "$monorope",
    fontWeight: "500",
    fontSize: "$normal",
    lineHeight: "$normal",
  },
  h1: {
    fontWeight: "bold",
    fontSize: "$h1",
    textTransform: "uppercase",
    lineHeight: "$h1",
    letterSpacing: "$h1",
  },
  h2: {
    fontWeight: "bold",
    fontSize: "$h2",
    textTransform: "uppercase",
    lineHeight: "$h2",
    letterSpacing: "$h2",
  },
  h3: {
    fontWeight: "bold",
    fontSize: "$h3",
    textTransform: "uppercase",
    lineHeight: "$h3",
    letterSpacing: "$h3",
  },
  h4: {
    fontWeight: "bold",
    fontSize: "$h4",
    textTransform: "uppercase",
    lineHeight: "$h4",
    letterSpacing: "$h4",
  },
  h5: {
    fontWeight: "bold",
    fontSize: "$h5",
    textTransform: "uppercase",
    lineHeight: "$h5",
    letterSpacing: "$h5",
  },
  h6: {
    fontWeight: "bold",
    fontSize: "$h6",
    textTransform: "uppercase",
    lineHeight: "$h6",
    letterSpacing: "$h6",
  },
  ".overline": {
    fontWeight: "400",
    fontSize: "$overline",
    textTransform: "uppercase",
    lineHeight: "$overline",
    letterSpacing: "$overline",
  },
  ".sub_title": {
    fontWeight: "bold",
    fontSize: "$sub_title",
    textTransform: "uppercase",
    lineHeight: "$sub_title",
    letterSpacing: "$sub_title",
  },
  "button, button:hover, button:focused": {
    outline: "none",
    border: "none",
  },
});

export const Root = () => {
  globalStyles();
  return (
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Root />
);
