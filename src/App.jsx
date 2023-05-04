import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/signin"} element={<SignIn />} />
                <Route path={"/signup"} element={<SignUp />} />
                <Route path={"/"} element={<Home />} />
                <Route path={"/"} element={<Home />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;