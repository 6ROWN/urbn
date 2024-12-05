import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserAuth from "./pages/UserAuth";
import { Toaster } from "@/components/ui/sonner";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/sign-in",
      element: <UserAuth />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />;
      <Toaster richColors position="top-right" />
    </>
  );
}

export default App;
