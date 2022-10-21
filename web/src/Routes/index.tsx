import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "../pages/Home";

import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";

export const Rotas = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}