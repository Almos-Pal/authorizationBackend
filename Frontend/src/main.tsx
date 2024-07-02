import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import LogInPage from "./pages/LogInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ContainerLayout from "./components/Layouts/ContainerLayout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ContainerLayout>
        <HomePage />
      </ContainerLayout>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: (
      <ContainerLayout>
        <LogInPage />
      </ContainerLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <ContainerLayout>
        <SignUpPage />
      </ContainerLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
