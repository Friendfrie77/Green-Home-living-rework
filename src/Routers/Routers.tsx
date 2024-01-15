import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/Homepage/Homepage";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {path: '', element: <HomePage />},
            {path: 'contact-us', element: <Contact />},
        ]
    }
])

