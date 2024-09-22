import React from "react";
import { Navigate, RouteObject } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import ContactPage from "./pages/ContactPage";
import Login from "./pages/Login";
import PaymentPage from "./pages/PaymentPage";
import Movie from "./pages/Movie";
import Profile from "./pages/Profile";
import Theater from "./pages/Theater";
import TheaterSearch from "./pages/TheaterSearch";
import HomePage from "./pages/HomePage";
import SeatBooking from "./pages/SeatBooking";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import DashboardContent from "./components/Admin/Dashboard/DashboardContent";
import ProtectedAdminRoutes from "./ProtectedAdminRoutes";
import ProtectedUserRoutes from "./ProtectedUserRoutes";
import TheatersComponent from "./components/Admin/Theaters/TheatersComponent";
import MoviesComponent from "./components/Admin/Movies/MoviesComponent";
import TicketsComponent from "./components/Admin/Tickets/TicketComponent";

const userInfo = sessionStorage.userInfo && JSON.parse(sessionStorage.userInfo);

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      // {
      //   path: "",
      //   element: userInfo.token.length ? (
      //     userInfo?.role === "Admin" ? (
      //       <Navigate to="/admin/dashboard" replace />
      //     ) : (
      //       <Navigate to="/accounts" replace />
      //     )
      //   ) : (
      //     <Navigate to="/login" replace />
      //   ),
      // },
      {
        path: "login",
        element: <Login />,
      },
      // {
      //   path: "forget-password",
      //   element: <ForgetPassword />,
      // },
      {
        path: "404",
        element: <PageNotFound />,
      },
      {
        path: "admin",
        children: [
          {
            path: "",
            element: (
              <ProtectedAdminRoutes>
                <DashboardContent />
              </ProtectedAdminRoutes>
            ),
          },
          {
            path: "dashboard",
            element: (
              <ProtectedAdminRoutes>
                <DashboardContent />
              </ProtectedAdminRoutes>
            ),
          },
          {
            path: "theaters",
            element: (
              <ProtectedAdminRoutes>
                <TheatersComponent />
              </ProtectedAdminRoutes>
            ),
          },
          {
            path: "movies",
            element: (
              <ProtectedAdminRoutes>
                <MoviesComponent />
              </ProtectedAdminRoutes>
            ),
          },
          {
            path: "tickets",
            element: (
              <ProtectedAdminRoutes>
                <TicketsComponent />
              </ProtectedAdminRoutes>
            ),
          },
        ],
      },
      {
        path: "",
        element: (
          <ProtectedUserRoutes>
            <HomePage />
          </ProtectedUserRoutes>
        ),
      },
      {
        path: "movies",
        children: [
          {
            path: "city/:cityId",
            element: (
              <ProtectedUserRoutes>
                <MoviesPage />
              </ProtectedUserRoutes>
            ),
          },
          {
            path: ":id",
            element: (
              <ProtectedUserRoutes>
                <Movie />
              </ProtectedUserRoutes>
            ),
          },
        ],
      },
      {
        path: "booking",
        element: (
          <ProtectedUserRoutes>
            <SeatBooking />
          </ProtectedUserRoutes>
        ),
      },
      {
        path: "theater",
        children: [
          {
            path: ":id",
            element: (
              <ProtectedUserRoutes>
                <Theater />
              </ProtectedUserRoutes>
            ),
          },
          {
            path: "search",
            element: (
              <ProtectedUserRoutes>
                <TheaterSearch />
              </ProtectedUserRoutes>
            ),
          },
        ],
      },
      {
        path: "contact",
        element: (
          <ProtectedUserRoutes>
            <ContactPage />
          </ProtectedUserRoutes>
        ),
      },
      {
        path: "payment",
        element: (
          <ProtectedUserRoutes>
            <PaymentPage />
          </ProtectedUserRoutes>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedUserRoutes>
            <Profile />
          </ProtectedUserRoutes>
        ),
      },
      {
        path: "*",
        element: <Navigate to="404" replace />,
      },
    ],
  },
];
