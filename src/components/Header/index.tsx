"use client";
import Logo from "./Logo";
import Link from "next/link";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  SunIcon,
  TwitterIcon,
  MoonIcon,
} from "../icons";

import {useState} from "react";
import {Divide as Hamburger} from "hamburger-react";
import {useTheme} from "next-themes";
import {cx} from "src/utils";

function Header() {
  const [click, setClick] = useState(false);
  const {theme, setTheme} = useTheme();

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className="flex items-center justify-between w-full p-4 px-5 sm:px-10">
      <Logo />

      {/* Mobile Menu */}
      <button
        className="z-50 inline-block sm:hidden"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <Hamburger size={29} toggled={click} toggle={setClick} />
      </button>
      {/* small screen nav */}
      <nav
        className="fixed z-50 flex items-center px-6 py-3 font-medium capitalize transition-all duration-300 translate-x-1/2 border border-solid rounded-full w-max sm:px-8 border-dark sm:hidden top-6 right-1/2 bg-light/80 backdrop-blur-sm ease dark:bg-dark dark:border-light"
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1 dark:bg-light dark:text-dark bg-dark text-light"
          )}
          aria-label="theme-switcher"
        >
          <SunIcon className="dark:hidden" />
          <MoonIcon className="hidden dark:block" />
        </button>
      </nav>

      {/* large screen nav */}
      <nav className="fixed z-50 items-center hidden px-8 py-3 font-medium capitalize translate-x-1/2 border border-solid rounded-full w-max border-dark sm:flex top-6 right-1/2 bg-light/80 backdrop-blur-sm dark:bg-dark dark:border-light">
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1 dark:bg-light dark:text-dark bg-dark text-light"
          )}
          aria-label="theme-switcher"
        >
          <MoonIcon className="dark:hidden" />
          <SunIcon className="hidden dark:block" />
        </button>
      </nav>
      {/* icons */}
      <div className="items-center hidden sm:flex">
        <a
          href="/"
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="transition-all duration-200 hover:scale-125 ease" />
        </a>
        <a
          href="/"
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon className="transition-all duration-200 hover:scale-125 ease" />
        </a>
        <a
          href="/"
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className="transition-all duration-200 hover:scale-125 ease dark:fill-light" />
        </a>
        <a
          href="/"
          rel="noopener noreferrer"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Dribbble"
          target="_blank"
        >
          <DribbbleIcon className="transition-all duration-200 hover:scale-125 ease" />
        </a>
      </div>
    </header>
  );
}

export default Header;
