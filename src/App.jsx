import { RouterProvider } from "react-router-dom";

import { routes } from "./routes/routes";

function App() {
  return (
    <main className="flex items-center justify-center min-h-[100vh] bg-light-gray">
      <RouterProvider router={routes} />
    </main>
  );
}

export default App;
