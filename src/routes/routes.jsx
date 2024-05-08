import { Navigate, createBrowserRouter } from "react-router-dom";
import Authentication from "../pages/AuthenticationForm/Authentication";
import BoardPage from "../pages/BoardPage/BoardPage";
import ProtectedRoute from "./ProtectedRoute";
import Lists from "../components/Lists/Lists";
import WorkspacePage from "../pages/WorkspacePage/WorkspacePage";

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
        <BoardPage />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/workspace",
        element: <WorkspacePage />,
      },
      {
        path: "/workspace/:id",
        element: <Lists />,
      },
      {
        path: "board",
        element: <Lists />,
      },
    ],
  },
]);

export default router;
