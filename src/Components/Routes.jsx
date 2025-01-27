import About from "../Pages/About";
import Faqs from "../Pages/Faqs";
import HomePage from "../Pages/Home";
import News from "../Pages/News";
import Terms from "../Pages/Terms";

export const GeneralRoutes = [
    { path: '', element: HomePage },
    { path: 'faq', element: Faqs },
    { path: 'about', element: About},
    { path: 'terms', element: Terms },
    { path: 'News', element: News },
]