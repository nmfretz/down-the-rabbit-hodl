import Link from "next/dist/client/link";
import { navLinks } from "../config";
import { useRouter } from "next/router";

const Nav = ({ setIsMenuOpen }) => {
  const { asPath } = useRouter();

  function handleMenuClose() {
    if (!setIsMenuOpen) return;
    setIsMenuOpen(false);
  }
  return (
    <nav id="primary-navigation">
      <ul role="list" className="nav-list">
        {Object.entries(navLinks).map(([name, href]) => {
          return (
            <Link key={href} href={href}>
              <li className={`${asPath === href ? "current-link" : ""}`} onClick={handleMenuClose}>
                {name}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
