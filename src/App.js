import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import { userInputs, productInputs } from "./formSource"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="users">
        <Route index element={<List title="Add New User" />} />
        <Route path=":userId" element={<Single />} />
        <Route path="new" element={<New inputs={userInputs} />} title="Add New User" />
      </Route>
      <Route path="products">
        <Route index element={<List title="Add New Product" />} />
        <Route path=":productId" element={<Single />} />
        <Route path="new" element={<New inputs={productInputs} />} title="Add New Product" />
      </Route>
    </Route>
  )
);

function App() {

  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
