import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
    return (
        <div className="features__container__feature">
            <div className="features__container__feature--title">
                <div />
                <h2>{title}</h2>
            </div>
            <div className="features__container__feature--text">
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Feature;
