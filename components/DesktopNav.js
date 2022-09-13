import { useState } from "react";
import Nav from "./Nav";

export const DesktopNav = ({ order, title }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div
      className="desktop-nav-container"
      onClick={() => setIsNavOpen(!isNavOpen)}
      onMouseEnter={() => setIsNavOpen(true)}
      onMouseLeave={() => setIsNavOpen(false)}
    >
      <div className="desktop-nav-display">
        <p>
          {order}
          {order === "" ? "" : "."}
        </p>
        <p className="desktop-nav-title">{title}</p>
        {/* <object className="down-arrow" type="image/svg+xml" data="/icon-down-arrow-light.svg"></object> */}

        {/* <img className="nav-down-arrow" src="/icon-down-arrow-light.svg" /> */}
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          // width="531.74"
          // height="460.5"
          viewBox="0 0 531.74 460.5"
          overflow="visible"
          enableBackground="new 0 0 531.74 460.5"
        >
          <polygon stroke="currentColor" points="530.874,0.5 265.87,459.5 0.866,0.5 " />
        </svg>
      </div>
      {isNavOpen && <Nav />}
    </div>
  );
};
