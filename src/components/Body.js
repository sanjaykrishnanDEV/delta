import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Publicpage from "./Publicpage";
import Loginpage from "./Loginpage";
const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Publicpage /> },
    {path:"/loginpage", element:<Loginpage />}
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
