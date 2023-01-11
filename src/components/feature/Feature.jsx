import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
    return (
        <div className="features__container__feature">
            <div className="features__container__feature--title">
                <div />
                <h2 className="font-manrope font-extrabold text-2xl leading-[30px] text-white tracking-[-0.04em]">
                    {title}
                </h2>
            </div>
            <div className="features__container__feature--text">
                <p>{text}</p>
            </div>
        </div>
    );
};

export default Feature;
