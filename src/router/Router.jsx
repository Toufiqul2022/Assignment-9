import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../Pages/ServiceDetails";
import ForgetPassword from "../Pages/ForgetPassword";
import Error404 from "../components/Error404";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error404></Error404>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/service/:id",
        element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
      },
      {
        path:"/forget/:email",
        Component: ForgetPassword,
      }
    ],
  },
]);
