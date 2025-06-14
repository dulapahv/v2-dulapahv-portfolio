import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import { Main, NotFound } from "./pages";
import "./App.css";

const App = () => {
    return (
        <>
            <div className="bg-black text-white p-4 text-center fixed z-[9999] w-full font-medium">
                <p className="text-sm">
                    This is an older version of the portfolio. For the latest version, visit{" "}
                    <Link to="https://dulapahv.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#fb568a] hover:underline">
                        dulapahv.dev
                    </Link>.
                </p>
            </div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
