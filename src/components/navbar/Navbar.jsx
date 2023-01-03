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
                    ? "flex items-center justify-between h-12 my-0 p-2 inset-x-0 bg-gradient-to-r from-[#ff548a] via-[#4cb5fd] to-[#9361ff] -z-35 scale-up-bottom ease-in-out duration-300 rounded-none m-0 fixed top-0"
                    : "flex items-center justify-between h-12 my-0 mx-4 p-2 fixed inset-x-0 bg-gradient-to-r from-[#ff548a] via-[#4cb5fd] to-[#9361ff] rounded-[10px] top-6 -z-35 scale-up-bottom ease-in-out duration-300"
            }
        >
            <div className="navbar__links--left">
                <p>
                    <a href="https://dulapahv.github.io/">{">"} DulapahV</a>
                </p>
            </div>
            <div className="navbar__links--middle">
                <Menu />
            </div>
            <div className="navbar__links--right">
                <p>
                    <a
                        href="https://github.com/dulapahv"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        My Github
                    </a>
                </p>
            </div>
            <div className="navbar__menu">
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
                    <div className="navbar__menu__container scale-up-tr">
                        <Menu />
                        <p>My Github</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
