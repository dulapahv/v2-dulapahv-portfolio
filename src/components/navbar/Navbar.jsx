import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const MenuItems = [
    {
        href: "#aboutme",
        text: "About Me",
    },
    {
        href: "#experiences",
        text: "Experiences",
    },
    {
        href: "#projects",
        text: "Projects",
    },
    {
        href: "#contact",
        text: "Contact",
    },
];

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isActive, setActive] = useState(false);

    const Menu = () => {
        return (
            <>
                {MenuItems.map((item, index) => (
                    <p
                        className="font-manrope cursor-pointer font-semibold text-lg leading-6 my-0 mx-4 text-white capitalize hover:animate-scale-up-center hover:text-[#ffcc49] max-md:hidden"
                        key={index}
                        onClick={() => {
                            setToggleMenu(false);
                        }}
                    >
                        <a href={item.href}>{item.text}</a>
                    </p>
                ))}
            </>
        );
    };

    document.addEventListener("scroll", () => {
        if (document.scrollingElement.scrollTop) setActive(true);
        else setActive(false);
    });
    return (
        <div
            className={
                isActive
                    ? "flex items-center justify-between h-[50px] my-0 p-2 inset-x-0 bg-gradient-to-r from-[#ff548a] via-[#4cb5fd] to-[#9361ff] z-50 scale-up-bottom ease-in-out duration-300 rounded-none m-0 fixed top-0"
                    : "flex items-center justify-between h-[50px] my-0 mx-4 p-2 fixed inset-x-0 bg-gradient-to-r from-[#ff548a] via-[#4cb5fd] to-[#9361ff] rounded-[10px] top-6 z-50 scale-up-bottom ease-in-out duration-300"
            }
        >
            <div className="flex items-center justify-start">
                <p className="font-manrope cursor-pointer font-semibold text-lg leading-6 my-0 mx-4 text-white capitalize hover:animate-scale-up-center hover:text-[#ffcc49]">
                    <a href="https://dulapahv.me/">{">"} DulapahV</a>
                </p>
            </div>
            <div className="flex items-center justify-center">
                <Menu />
            </div>
            <div className="flex items-center justify-end">
                <p className="font-manrope cursor-pointer font-semibold text-lg leading-6 my-0 mx-4 text-white capitalize hover:animate-scale-up-center hover:text-[#ffcc49] max-md:hidden">
                    <a
                        href="https://github.com/dulapahv"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My Github
                    </a>
                </p>
            </div>
            <div className="cursor-pointer hidden mr-2 relative max-md:flex">
                {toggleMenu ? (
                    <RiCloseLine
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <RiMenu3Line
                        color="#fff"
                        size={27}
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <div className="rounded flex flex-col items-end justify-end mt-4 p-8 absolute right-0 text-end top-[40px] min-w-[210px] shadow-2xl scale-up-tr">
                        <Menu />
                        <p>My Github</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
