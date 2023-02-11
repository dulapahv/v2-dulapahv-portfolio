import React from "react";
import ImgAssets from "./imports.js";
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
                    <img src={ImgAssets.Prog_Lang.py} alt="Python" />
                    <img src={ImgAssets.Prog_Lang.c} alt="C" />
                    <img src={ImgAssets.Prog_Lang.cpp} alt="C++" />
                    <img src={ImgAssets.Prog_Lang.cs} alt="C#" />
                    <img src={ImgAssets.Prog_Lang.java} alt="Java" />
                    <img src={ImgAssets.Prog_Lang.rust} alt="Rust" />
                    <img src={ImgAssets.Prog_Lang.html} alt="HTML" />
                    <img src={ImgAssets.Prog_Lang.css} alt="CSS" />
                    <img src={ImgAssets.Prog_Lang.js} alt="JavaScript" />
                    <img src={ImgAssets.Prog_Lang.react} alt="React" />
                    {/* <img src={ImgAssets.Prog_Lang.arm} alt="ARM" /> */}
                    {/* <img src={ImgAssets.Prog_Lang.swift} alt="Swift" /> */}
                </div>
                <div className="experiences__container__header">
                    <div />
                    <h2>
                        {"<"} Other Technologies {">"}
                    </h2>
                </div>
                <div className="experiences__container__icon">
                    <img src={ImgAssets.Other_Tech.firebase} alt="Firebase" />
                    <img src={ImgAssets.Other_Tech.git} alt="Git" />
                    <img src={ImgAssets.Other_Tech.unity} alt="Unity" />
                    <img src={ImgAssets.Other_Tech.unreal} alt="Unreal Engine" />
                    <img
                        src={ImgAssets.Other_Tech.tailwindcss}
                        alt="Tailwind CSS"
                    />
                    <img src={ImgAssets.Other_Tech.vmware} alt="VMware" />
                    <img src={ImgAssets.Other_Tech.mysql} alt="MySQL" />
                    <img src={ImgAssets.Other_Tech.sass} alt="Sass" />
                </div>
                <div className="experiences__container__header">
                    <div />
                    <h2>
                        {"<"} OS and Hardware {">"}
                    </h2>
                </div>
                <div className="experiences__container__icon">
                    <img src={ImgAssets.OS_Hardware.windows} alt="Windows" />
                    <img src={ImgAssets.OS_Hardware.linux} alt="Linux" />
                    <img
                        src={ImgAssets.OS_Hardware.raspberry_pi}
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
                    <img src={ImgAssets.Media_Design.ps} alt="Adobe Photoshop" />
                    <img
                        src={ImgAssets.Media_Design.ai}
                        alt="Adobe Illustrator"
                    />
                    <img src={ImgAssets.Media_Design.pr} alt="Adobe Premiere" />
                    <img
                        src={ImgAssets.Media_Design.word}
                        alt="Microsoft Word"
                    />
                    <img
                        src={ImgAssets.Media_Design.ppt}
                        alt="Microsoft PowerPoint"
                    />
                    <img
                        src={ImgAssets.Media_Design.excel}
                        alt="Microsoft Excel"
                    />
                    <img
                        src={ImgAssets.Media_Design.visio}
                        alt="Microsoft Visio"
                    />
                    <img src={ImgAssets.Media_Design.audacity} alt="Audacity" />
                </div>
                <div className="experiences__container__header">
                    <div />
                    <h2>
                        {"<"} Virtual Reality and Virtual Character {">"}
                    </h2>
                </div>
                <div className="experiences__container__icon">
                    <img src={ImgAssets.VR_VChar.oculus} alt="Oculus" />
                    <img src={ImgAssets.VR_VChar.vroid} alt="VRoid Studio" />
                    <img src={ImgAssets.VR_VChar.vcast} alt="VCast Studio" />
                    <img src={ImgAssets.VR_VChar.vtube} alt="VTube Studio" />
                    <img src={ImgAssets.VR_VChar.vmagic} alt="VMagicMirror" />
                </div>
            </div>
        </div>
    );
};

export default Experiences;
