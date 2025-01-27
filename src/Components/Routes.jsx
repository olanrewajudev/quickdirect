import About from "../Pages/About";
import Faqs from "../Pages/Faqs";
import Home from "../Pages/HOme";
import News from "../Pages/News";
import Terms from "../Pages/Terms";

export const GeneralRoutes = [
    { path: '', element: Home },
    { path: 'faq', element: Faqs },
    { path: 'about', element: About},
    { path: 'terms', element: Terms },
    { path: 'News', element: News },
]