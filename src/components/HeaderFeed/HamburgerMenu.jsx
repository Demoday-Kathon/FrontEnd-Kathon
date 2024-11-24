import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLessThan } from "react-icons/fa";
import Styles from "./HeaderFeed.module.css";
import LinkComponent from '../layout/link/LinkComponent';
import Button from '../layout/button/button';

function HamburgerMenu({ links, logo }) {
  const location = useLocation();
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const toggleNav = () => setIsNavVisible(!isNavVisible);

  return (
    <header className={Styles.header}>
      <div className={Styles.containerButtonHamburguer}>

      <Link to="/">
            <img className={Styles.logo} src={logo} alt="Logo" />
      </Link>

      <button className={Styles.hamburgerButton} onClick={toggleNav}>
        {isNavVisible ? (
          <svg viewBox="0 0 100 80" width="40" height="40">
            <line x1="10" y1="10" x2="90" y2="70" stroke="white" strokeWidth="10" />
            <line x1="10" y1="70" x2="90" y2="10" stroke="white" strokeWidth="10" />
          </svg>
        ) : (
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20" rx="10"></rect>
            <rect y="30" width="100" height="20" rx="10"></rect>
            <rect y="60" width="100" height="20" rx="10"></rect>
          </svg>
        )}
      </button>
      </div>

      <aside
        className={`${Styles.sidebar} ${
          isNavVisible ? Styles.visible : Styles.hidden
        }`}
      >
        <div className={Styles.container}>

          <nav className={Styles.navLinks}>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`${Styles.link} ${
                  location.pathname === link.path ? Styles.active : ""
                }`}
                onMouseEnter={() => setHoveredLink(link.path)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <FaLessThan
                  className={`${Styles.icon} ${
                    hoveredLink === link.path || location.pathname === link.path
                      ? Styles.iconVisible
                      : ""
                  }`}
                  style={{ marginRight: "0.5em" }}
                />
                {link.name}
              </Link>
            ))}
            <LinkComponent customClass="buttonEntrarNav" linkTo="/Login" text={<Button customClass="buttonHeaderMobile" text="Entrar"/>}>  </LinkComponent>
          </nav>
        </div>
      </aside>
    </header>
  );
}

export default HamburgerMenu;