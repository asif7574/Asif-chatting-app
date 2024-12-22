import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/shared/Home";

import { EmployeeLayout } from "../layout/EmployeeLayout";
import { ErrorPage } from "../pages/shared/ErrorPage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <EmployeeLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "",
          element: <Home/>,
        },
        
      ]
    }
  ]); 