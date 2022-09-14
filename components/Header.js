import Link from "next/link";
import { useState, useEffect } from "react";
import Nav from "./Nav";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log(isDarkMode);
    if (isDarkMode) {
      // set :root variables to dark mode colours
      document.documentElement.style.setProperty("--clr-primary", "#222");
      document.documentElement.style.setProperty("--clr-secondary", "#ccc"); // could use #eddfd6 instead. Check with Andy.
      // document.documentElement.style.setProperty("--clr-secondary", "#eddfd6"); // could use #eddfd6 instead. Check with Andy.
      document.documentElement.style.setProperty("--clr-accent-500", "#f7931a");
    } else {
      // set ::root variables to light mode colours
      document.documentElement.style.setProperty("--clr-primary", "#eddfd6");
      document.documentElement.style.setProperty("--clr-secondary", "#222");
      document.documentElement.style.setProperty("--clr-accent-500", "#000");
    }
  }, [isDarkMode]);

  return (
    <header>
      <div className="header-primary">
        <div className="toggle-site-name-container">
          <button className="nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
            {!isMenuOpen ? (
              <svg onClick={() => setIsMenuOpen(true)} xmlns="http://www.w3.org/2000/svg" width="25" height="21">
                <g fill="currentColor" fillRule="evenodd">
                  <path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
                </g>
              </svg>
            ) : (
              <svg onClick={() => setIsMenuOpen(false)} xmlns="http://www.w3.org/2000/svg" width="25" height="21">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"
                />
              </svg>
            )}

            <span className="visually-hidden">Menu</span>
          </button>
          <Link href="/" passHref>
            <h1 className="header-site-name">Down The Rabbit Hodl</h1>
          </Link>
        </div>

        <div className="header-links-container">
          <div className="color-mode" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            )}
          </div>

          <a
            className=""
            href="https://github.com/nmfretz/down-the-rabbit-hodl"
            target="_blank"
            rel="noreferrer"
            title="github.com/nmfretz"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="2 2 20 20">
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 3C7.0275 3 3 7.12937 3 12.2276C3 16.3109 5.57625 19.7597 9.15374 20.9824C9.60374 21.0631 9.77249 20.7863 9.77249 20.5441C9.77249 20.3249 9.76125 19.5982 9.76125 18.8254C7.5 19.2522 6.915 18.2602 6.735 17.7412C6.63375 17.4759 6.19499 16.6569 5.8125 16.4378C5.4975 16.2647 5.0475 15.838 5.80124 15.8264C6.51 15.8149 7.01625 16.4954 7.18499 16.7723C7.99499 18.1679 9.28875 17.7758 9.80625 17.5335C9.885 16.9337 10.1212 16.53 10.38 16.2993C8.3775 16.0687 6.285 15.2728 6.285 11.7432C6.285 10.7397 6.63375 9.9092 7.20749 9.26326C7.1175 9.03257 6.8025 8.08674 7.2975 6.81794C7.2975 6.81794 8.05125 6.57571 9.77249 7.76377C10.4925 7.55615 11.2575 7.45234 12.0225 7.45234C12.7875 7.45234 13.5525 7.55615 14.2725 7.76377C15.9937 6.56418 16.7475 6.81794 16.7475 6.81794C17.2424 8.08674 16.9275 9.03257 16.8375 9.26326C17.4113 9.9092 17.76 10.7281 17.76 11.7432C17.76 15.2843 15.6563 16.0687 13.6537 16.2993C13.98 16.5877 14.2613 17.1414 14.2613 18.0065C14.2613 19.2407 14.25 20.2326 14.25 20.5441C14.25 20.7863 14.4188 21.0746 14.8688 20.9824C16.6554 20.364 18.2079 19.1866 19.3078 17.6162C20.4077 16.0457 20.9995 14.1611 21 12.2276C21 7.12937 16.9725 3 12 3Z"
              ></path>
            </svg>
          </a>
          <a
            className="bitcoin-icon"
            href="https://bitcoin.org/en/"
            target="_blank"
            rel="noreferrer"
            title="bitcoin.org"
          >
            {isDarkMode ? <img src="/icon-bitcoin-light.svg" /> : <img src="/icon-bitcoin-dark.svg" />}
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div className="nav-container">
          <Nav setIsMenuOpen={setIsMenuOpen} />
        </div>
      )}
    </header>
  );
};

export default Header;
