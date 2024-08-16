import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../pages/RootLayout";
import Error from "../pages/Error";
import YourInfo from "../pages/YourInfo";
import SelectPlan from "../pages/SelectPlan";
import Addons from "../pages/Addons";
import Summary from "../pages/Summary";

export const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <RootLayout />,
    children: [
      { index: true, element: <YourInfo /> },
      { path: "select-plan", element: <SelectPlan /> },
      { path: "addons", element: <Addons /> },
      { path: "summary", element: <Summary /> },
    ],
  },
]);
