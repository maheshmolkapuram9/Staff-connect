import { createBrowserRouter, RouterProvider } from "react-router";
import Dashboard from "./pages/Dashboard";
import Body from "./components/Body";
import StaffDirectory from "./pages/StaffDirectory";
import ItRequests from "./pages/ItRequests";
import Tickets from "./pages/Tickets";
import ToDoList from "./pages/ToDoList";
import NotFound from "./pages/NotFound";
import useStaffDeatils from "./hooks/useStaffDetails";
import useToDoList from "./hooks/useToDoDetails";
import useTicketDetails from "./hooks/useTicketDetails";

function App() {
  useStaffDeatils();
  useToDoList();
  useTicketDetails();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/staffDirectory",
          element: <StaffDirectory />,
        },
        {
          path: "/itRequests",
          element: <ItRequests />,
        },
        {
          path: "/tickets",
          element: <Tickets />,
        },
        {
          path: "/toDoList",
          element: <ToDoList />,
        },
      ],
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
