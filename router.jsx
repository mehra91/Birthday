import { createBrowserRouter } from "react-router-dom";
import FirstPage from "./src/Pages/FirstPage";
import SecondPage from "./src/Pages/SecondPage";
import App from "./src/App";


const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>
        },
         {
            path: "/first",
            element: <App/>
        },
        {
            path: "/second",
            element: <SecondPage/>
        }
]);
export default router;