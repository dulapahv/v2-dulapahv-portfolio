import React from "react";
import { Feature, Timeline } from "../../components";
import "./aboutme.css";

const Aboutme = () => {
    return (
        <div className="aboutme section_margin" id="aboutme">
            <div className="aboutme__heading">
                <h1 className="gradient_text">Who I Am?</h1>
                <p>
                    Hi! My name is Dulapah Vibulsanti and I am a software
                    engineer with a passion for building and creating intuitive,
                    user-friendly applications. I am currently studying in
                    Bachelor's degree in Software Engineering from KMITL and
                    have since gained experience working in a variety of tasks
                    and events.
                    <br />
                    <br />
                    In my current role as a software engineer at KMITL, I have
                    had the opportunity to work on a range of projects, from
                    developing and maintaining applications to designing and
                    implementing new features for new projects. I have a strong
                    foundation in Python, C, C++ and Java, and am learning on
                    the frontend languages such as HTML, CSS, JavaScript, React.
                    <br />
                    <br />I am a team player and enjoy collaborating with others
                    to find creative solutions to challenging problems. In my
                    free time, you can find me tinkering with personal projects
                    or exploring new technologies. I am always looking to expand
                    my skills and knowledge in the field as a software engineer
                    and am excited to see where my career takes me next.
                </p>
                <h1 className="gradient_text">What Makes Me Unique?</h1>
            </div>
            <div className="aboutme__container">
                <Feature
                    title="Personality"
                    text="A multi-talented individual, a quick learner, and a fast-adapting person. I always put in a lot of effort to learn and to make sure that the work I delivered was perfect."
                />
                <Feature
                    title="Knowledge Base"
                    text="Experienced in the backend and can also do the frontend. I am also able to do UX/UI design and can do some graphic design."
                />
                <Feature
                    title="Future Goals"
                    text="A full-stack developer and is pursuing universities abroad. I am also looking to improve my skills and abilities so that I can grow professionally."
                />
            </div>
            <div className="timeline__container">
                <h1 className="gradient_text">
                    My Path to Achieving a Better Education
                </h1>
                <div className="timeline__container--content">
                    <Timeline />
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
