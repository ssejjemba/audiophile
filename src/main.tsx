import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import App from "./App.tsx";
import { CategoryHeadphones } from "./pages/categories/Category.tsx";
import { CategorySpeakers } from "./pages/categories/Category.tsx";
import { CategoryEarphones } from "./pages/categories/Category.tsx";
import { Checkout } from "./pages/checkout/Checkout.tsx";
import { MarkIIHeadphoneSpecs } from "./pages/product-spec/MarkIIProductSpecs.tsx";
import { MarkIHeadphoneSpecs } from "./pages/product-spec/MarkIProductSpec.tsx";
import { XX59headphoneSpecs } from "./pages/product-spec/XX59ProductSpecs.tsx";
import { YX1EarphoneSpecs } from "./pages/product-spec/YX1ProductSpecs.tsx";
import { ZX7SpeakerSpecs } from "./pages/product-spec/ZX7ProductSpecs.tsx";
import { ZX9SpeakerSpecs } from "./pages/product-spec/ZX9ProductSpecs.tsx";
import Data from "./data/data.json";
import { globalCss } from "../stitches.config.ts";
import { ShoppingCartContextProvider } from "./context/ShoppingCartContext.tsx";

const cartCheckoutURL = "cart/checkout";
const router = createBrowserRouter([
  // Root Home Route
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  // Navigation Routes
  {
    path: `${Data.categories.earphonesCategory.url}`,
    element: <CategoryEarphones />,
  },
  {
    path: `${Data.categories.headphonesCategory.url}`,
    element: <CategoryHeadphones />,
  },
  {
    path: `${Data.categories.speakersCategory.url}`,
    element: <CategorySpeakers />,
  },
  // Cart Checkout Route
  {
    path: cartCheckoutURL,
    element: <Checkout />,
  },
  // Product Spec Routes
  {
    path: `${Data.headphonesCategory.headphones.markIIheadphones.gadgetPageURL}`,
    element: <MarkIIHeadphoneSpecs />,
  },
  {
    path: `${Data.headphonesCategory.headphones.markIheadphones.gadgetPageURL}`,
    element: <MarkIHeadphoneSpecs />,
  },
  {
    path: `${Data.headphonesCategory.headphones.XX59headphones.gadgetPageURL}`,
    element: <XX59headphoneSpecs />,
  },
  {
    path: `${Data.earphonesCategory.earphones.YX1Earphones.gadgetPageURL}`,
    element: <YX1EarphoneSpecs />,
  },
  {
    path: `${Data.speakersCategory.speakers.ZX7Speakers.gadgetPageURL}`,
    element: <ZX7SpeakerSpecs />,
  },
  {
    path: `${Data.speakersCategory.speakers.ZX9Speakers.gadgetPageURL}`,
    element: <ZX9SpeakerSpecs />,
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
      <ShoppingCartContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </ShoppingCartContextProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<Root />);
