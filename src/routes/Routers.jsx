
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import BlogPage from "../Pages/BlogPage/BlogPage";
import StudentResourcesPage from "../Pages/StudentResourcesPage/StudentResourcesPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path:"/",
            element:<HomePage></HomePage>
        },
        {
            path:"/about",
            element:<AboutPage></AboutPage>
        },
        {
            path:"/blog",
            element:<BlogPage></BlogPage>
        },
        {
            path:"/studentResources",
            element:<StudentResourcesPage></StudentResourcesPage>
        },
        {
          path:"/login",
          element:<LoginPage></LoginPage>
        }
      ]
    },
  ]);
  export default router