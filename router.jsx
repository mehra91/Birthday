import { createBrowserRouter } from "react-router-dom";
import FirstPage from "./src/Pages/FirstPage";
import SecondPage from "./src/Pages/SecondPage";
import App from "./src/App";
import VideoPage from "./src/Pages/VideoPage";


const router = createBrowserRouter([
        {
            path: "/",
            element: <App/>
        },
         {
            path: "/first",
            element: <FirstPage/>
        },
        {
            path: "/second",
            element: <SecondPage/>
        },
        {
            path: "/Video",
            element: <VideoPage/>
        }
]);

export default router;