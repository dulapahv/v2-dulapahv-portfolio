import React from "react";
import profile_pic from "../../assets/profile_pic.png";

const Header = () => {
    return (
        <div className="section_padding box-border flex flex-row min-h-screen w-full z-0 max-lg:flex-col max-lg:pt-32 max-sm:pt-24 max-[490px]:!pt-24">
            <div className="flex flex-col items-start justify-center flex-grow mr-20 max-lg:mx-0 max-lg:mt-0 max-lg:mb-8 max-[400px]:mb-4 max-[330px]:mb-0">
                <h1 className="gradient_text slide-in-blurred-left font-manrope font-extrabold text-[62px] tracking-[-0.04em] leading-[75px] max-sm:text-5xl max-sm:leading-[60px] max-[490px]:text-4xl max-[490px]:leading-[48px]">
                    Greetings!
                    <br />
                    I'm Dulapah Vibulsanti
                </h1>
                <p className="flip-in-hor-bottom font-manrope text-[color:var(--color-text)] font-normal text-xl leading-7 my-6 max-sm:text-base max-sm:leading-6 max-[490px]:text-sm max-[490px]:leading-6 max-[490px]:mt-3">
                    A year 2 student in Software Engineering @{" "}
                    <span className="font-semibold text-[#ff914d]">KMITL</span>,
                    Bangkok
                    <br />
                    Cadet @{" "}
                    <span className="font-semibold text-[#5efdff]">
                        42 Bangkok
                    </span>
                </p>
                <a href="#aboutme">
                    <div className="heartbeat font-manrope file font-semibold text-xl m-0 py-4 px-8 text-white bg-[#ff548a] rounded-full hover:animate-vibrate max-[490px]:text-base">
                        <button type="button">Discover me!</button>
                    </div>
                </a>
            </div>
            <div className="rotate-in-2-cw flex items-center justify-center flex-grow">
                <img
                    src={profile_pic}
                    alt="profile_pic"
                    className="h-auto max-w-full w-[40rem] rounded-3xl"
                />
            </div>
        </div>
    );
};

export default Header;
