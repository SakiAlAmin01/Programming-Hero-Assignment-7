import { Toaster } from "react-hot-toast";
import Router from "./routes/Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
      <Toaster />
    </>
  );
}

export default App;