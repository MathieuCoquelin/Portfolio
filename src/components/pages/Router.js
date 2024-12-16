import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./homePage/Home";
import About from "./aboutPage/About";
import Skills from "./skillsPage/Skills";
import NotFound from "./notFoundPage/NotFound";

function Router() {
    return (
        // <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="about" element={<About />} />
                <Route path="skills" element={<Skills />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        /* </BrowserRouter> */
    );
}

export default Router