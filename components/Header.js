import Link from "next/link";
import { useState, useEffect } from "react";
import Nav from "./Nav";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // console.log(isMenuOpen);
  }, [isMenuOpen]);

  return (
    <header className="header-primary">
      <div className="display-flex justify-content-space-between align-items-center padding-400">
        <h1 className="header-site-name">
          <Link href="/" passHref>
            Down The Rabbit Hodl
          </Link>
        </h1>

        {/* <a className="header-site-name" href="/">
          Down The Rabbit Hodl
        </a> */}
        <div className="display-flex align-items-center gap-400">
          <a
            href="https://github.com/nmfretz/down-the-rabbit-hodl"
            target="_blank"
            rel="noreferrer"
            title="github.com/nmfretz"
          >
            <img className="header-link" src="/github-logo.png" />
          </a>
          <a href="https://bitcoin.org/en/" target="_blank" rel="noreferrer" title="bitcoin.org">
            <img className="header-link" src="/bitcoin-logo.png" />
          </a>
          <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
            {!isMenuOpen ? (
              <img
                className="icon-hamburger"
                src="/icon-hamburger.svg"
                alt=""
                aria-hidden="true"
                onClick={() => setIsMenuOpen(true)}
              />
            ) : (
              <img
                className="icon-close"
                src="/icon-close.svg"
                alt=""
                aria-hidden="true"
                onClick={() => setIsMenuOpen(false)}
              />
            )}

            <span className="visually-hidden">Menu</span>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="header-nav">
          <Nav setIsMenuOpen={setIsMenuOpen} />
        </div>
      )}
    </header>
  );
};

export default Header;
