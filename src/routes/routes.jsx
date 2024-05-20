import { Navigate, createBrowserRouter } from "react-router-dom";
import Authentication from "../pages/AuthenticationForm/Authentication";
import ProtectedRoute from "./ProtectedRoute";
import WorkspacePage from "../pages/WorkspacePage/WorkspacePage";
import ListsPage from "../pages/ListsPage/ListsPage";
import Layout from "../pages/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Authentication type="login" />,
  },
  {
    path: "/signup",
    element: <Authentication type="signup" />,
    
  },
  {
    path: "/workspace",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/workspace",
        element: <WorkspacePage />,
      },
      {
        path: "/workspace/:id",
        element: <ListsPage />,
      },
      {
        path: "Lists",
        element: <ListsPage />,
      },
    ],
  },
]);

export default router;
