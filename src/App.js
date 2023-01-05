import React from "react";
import { Routes, Route } from "react-router-dom";

import { Main, Test } from "./pages";
import "./App.css";

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/gram-schmidt" element={<Test />} />
        </Routes>
    );
};

export default App;
