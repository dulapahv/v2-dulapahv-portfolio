import React from "react";
import { Link } from "react-router-dom";

import {
    Header,
    Aboutme,
    Experiences,
    ExperiencesDetail,
    Projects,
    Contact,
    Footer,
} from ".././containers";
import { Navbar, CTA } from ".././components";
import "../App.css";

const Main = () => {
    return (
        <div className="App animate-bottom">
            <Link to="/gram-schmidt" className="text-blue-500 hover:text-blue-700 underline">DulapahV</Link>
            <div className="gradient_bg">
                <Navbar />
                <Header />
            </div>
            <Aboutme />
            <Experiences />
            <ExperiencesDetail />
            <CTA />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Main;
