import React from "react";
import "./cta.css";

const CTA = () => {
    return (
        <div className="cta">
            <div className="cta__content">
                <p>
                    Click here to see my other coding accomplishments on Github
                </p>
                <h3>Check out my Github to get an in-depth view of my work!</h3>
            </div>
            <div className="cta__btn">
                <a
                    href="https://github.com/dulapahv"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button type="button">Click Here</button>
                </a>
            </div>
        </div>
    );
};

export default CTA;
