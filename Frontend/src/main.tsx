import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import LogInPage from "./pages/LogInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ContainerLayout from "./components/Layouts/ContainerLayout.tsx";
import LogoutPage from "./pages/LogoutPage.tsx";
import { AuthProvider } from "./context/AuthContext .tsx";
import { endpoints } from "./constants/endpoints.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider authEndpoint={endpoints.users}>
        <ContainerLayout>
          <HomePage />
        </ContainerLayout>
      </AuthProvider>
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
  {
    path: "/logout",
    element: (
      <ContainerLayout>
        <LogoutPage />
      </ContainerLayout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
