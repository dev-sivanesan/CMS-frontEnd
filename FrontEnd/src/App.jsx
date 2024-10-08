import LoginForm from "./components/Login";
import Register from "./components/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Manager from "./dashboards/Manager";
import Supervisor from "./dashboards/Supervisor/Supervisor";
import Worker from "./dashboards/Worker";
import UpdateData from "./dashboards/Supervisor/UpdateData";
import SideBar from "./dashboards/SideBar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/manager",
    element: <Manager />,
  },
  {
    path: "/supervisor",
    element: <Supervisor />,
  },
  {
    path: "/worker",
    element: <Worker />,
  },
  {
    path: "/updateData/:id" ,
    element: <UpdateData />,
  },
  {
    path: "/sidebar",
    element: <SideBar/>,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      
    </>
  );
}

export default App;
