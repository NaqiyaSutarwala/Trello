import MiniDrawer from "./pages/BoardPage/BoardPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";

import router from "./routes/routes";

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

// {/* <ThemeProvider theme={theme}>
//   {/* <Signup /> */}
//   {/* <Board /> */}
//   <MiniDrawer />
// </ThemeProvider> */}

// return (
//   <BrowserRouter>
//     <Routes>
//       <Route
//         path="/login"
//         index
//         element={<Authentication type={"login"} />}
//       />
//       <Route path="/signup" element={<Authentication type={"signup"} />} />
//       <Route
//         path="/board"
//         element={
//           <ProtectedRoute>
//             <BoardPage />
//           </ProtectedRoute>
//         }
//       ></Route>
//     </Routes>
//   </BrowserRouter>
// );
