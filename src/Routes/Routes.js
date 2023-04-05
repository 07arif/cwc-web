import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About.js/About";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import EarnWithBike from "../Pages/Shared/Others/EarnWithBike/EarnWithBike";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/bookYourParcel',
                element: <EarnWithBike></EarnWithBike>
            }
        ]
    }
])

export default Routes;