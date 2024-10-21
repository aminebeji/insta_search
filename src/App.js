import "./styles/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const Router = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/profile/:id",
    element: <ProfilePage />,
  },
];

function App() {
  return (
    <MainLayout>
      <RouterProvider router={createBrowserRouter(Router)} />
    </MainLayout>
  );
}

export default App;
