import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

import { Store } from "./pages/Store.jsx";
import { Home } from "./pages/Home.jsx";
import { FruitDetail } from "./pages/FruitDetail.jsx";
import { Cart } from "./pages/Cart.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContextProvider } from "./context/Context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout general con navbar, etc.
    children: [
      { path: "", element: <Home /> },
      { path: "store", element: <Store /> },
      { path: "store/:fruitName", element: <FruitDetail /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </ContextProvider>
  </StrictMode>
);
