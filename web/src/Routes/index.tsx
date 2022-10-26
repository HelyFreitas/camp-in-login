import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";
import { ForgotPass } from "../pages/ForgotPassword";

export const Rotas = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/forgotpass" element={<ForgotPass />} />
            </Routes>
        </Router>
    );
}