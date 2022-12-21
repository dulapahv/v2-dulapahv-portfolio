import React from "react";
import Exp_Icon from "./imports.js";
import "./experiences.css";

const Experiences = () => {
    return (
        <div className="experiences section_padding" id="experiences">
            <div className="experiences__heading">
                <div className="gradient_text">
                    <h1>Discovering Myself Through Experiences</h1>
                </div>
            </div>
            <div className="experiences__container">
                <div className="experiences__container__header">
                    <div />
                    <h2>
                        {"<"} Programming Languages {">"}
                    </h2>
                </div>
                <div className="experiences__container__icon">
                    <img src={Exp_Icon.Prog_Lang.py} alt="Python" />
                    <img src={Exp_Icon.Prog_Lang.c} alt="C" />
                    <img src={Exp_Icon.Prog_Lang.cpp} alt="C++" />
                    <img src={Exp_Icon.Prog_Lang.cs} alt="C#" />
                    <img src={Exp_Icon.Prog_Lang.java} alt="Java" />
                    <img src={Exp_Icon.Prog_Lang.rust} alt="Rust" />
                    <img src={Exp_Icon.Prog_Lang.html} alt="HTML" />
                    <img src={Exp_Icon.Prog_Lang.css} alt="CSS" />
                    <img src={Exp_Icon.Prog_Lang.js} alt="JavaScript" />
                    <img src={Exp_Icon.Prog_Lang.react} alt="React" />
                    <img src={Exp_Icon.Prog_Lang.arm} alt="ARM" />
                    <img src={Exp_Icon.Prog_Lang.swift} alt="Swift" />
                </div>
                <div className="experiences__container__header">
                    <div />
                    <h2>
                        {"<"} Other Technologies {">"}
                    </h2>
                </div>
                <div className="experiences__container__icon">
                    <img src={Exp_Icon.Other_Tech.firebase} alt="Firebase" />
                    <img src={Exp_Icon.Other_Tech.git} alt="Git" />
                    <img src={Exp_Icon.Other_Tech.unity} alt="Unity" />
                    <img src={Exp_Icon.Other_Tech.unreal} alt="Unreal Engine" />
                    <img
                        src={Exp_Icon.Other_Tech.tailwindcss}
                        alt="Tailwind CSS"
                    />
                    <img src={Exp_Icon.Other_Tech.vmware} alt="VMware" />
                    <img src={Exp_Icon.Other_Tech.mysql} alt="MySQL" />
                    <img src={Exp_Icon.Other_Tech.sass} alt="Sass" />
                </div>
                <div className="experiences__container__header">
                    <div />
                    <h2>
                        {"<"} OS and Hardware {">"}
                    </h2>
                </div>
                <div className="experiences__container__icon">
                    <img src={Exp_Icon.OS_Hardware.windows} alt="Windows" />
                    <img src={Exp_Icon.OS_Hardware.linux} alt="Linux" />
                    <img
                        src={Exp_Icon.OS_Hardware.raspberry_pi}
                        alt="Raspberry Pi"
                    />
                </div>
                <div className="experiences__container__header">
                    <div />
                    <h2>
                        {"<"} Media and Design {">"}
                    </h2>
                </div>
                <div className="experiences__container__icon">
                    <img src={Exp_Icon.Media_Design.ps} alt="Adobe Photoshop" />
                    <img
                        src={Exp_Icon.Media_Design.ai}
                        alt="Adobe Illustrator"
                    />
                    <img src={Exp_Icon.Media_Design.pr} alt="Adobe Premiere" />
                    <img
                        src={Exp_Icon.Media_Design.word}
                        alt="Microsoft Word"
                    />
                    <img
                        src={Exp_Icon.Media_Design.ppt}
                        alt="Microsoft PowerPoint"
                    />
                    <img
                        src={Exp_Icon.Media_Design.excel}
                        alt="Microsoft Excel"
                    />
                    <img
                        src={Exp_Icon.Media_Design.visio}
                        alt="Microsoft Visio"
                    />
                    <img src={Exp_Icon.Media_Design.audacity} alt="Audacity" />
                </div>
                <div className="experiences__container__header">
                    <div />
                    <h2>
                        {"<"} Virtual Reality and Virtual Character {">"}
                    </h2>
                </div>
                <div className="experiences__container__icon">
                    <img src={Exp_Icon.VR_VChar.oculus} alt="Oculus" />
                    <img src={Exp_Icon.VR_VChar.vroid} alt="VRoid Studio" />
                    <img src={Exp_Icon.VR_VChar.vcast} alt="VCast Studio" />
                    <img src={Exp_Icon.VR_VChar.vtube} alt="VTube Studio" />
                    <img src={Exp_Icon.VR_VChar.vmagic} alt="VMagicMirror" />
                </div>
            </div>
        </div>
    );
};

export default Experiences;
