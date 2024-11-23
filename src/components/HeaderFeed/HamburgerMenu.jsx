import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLessThan } from "react-icons/fa";
import Styles from "./HeaderFeed.module.css"; // Certifique-se de que este CSS está correto

function HamburgerMenu({ links, logo }) {
  const location = useLocation(); // Para verificar a rota ativa
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const toggleNav = () => setIsNavVisible(!isNavVisible);

  return (
    <header className={Styles.header}>
      {/* Ícone de menu */}
      <button className={Styles.hamburgerButton} onClick={toggleNav}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20" rx="10"></rect>
          <rect y="30" width="100" height="20" rx="10"></rect>
          <rect y="60" width="100" height="20" rx="10"></rect>
        </svg>
      </button>

      {/* Barra lateral */}
      <aside
        className={`${Styles.sidebar} ${
          isNavVisible ? Styles.visible : Styles.hidden
        }`}
      >
        <div className={Styles.container}>
          {/* Logo */}
          <Link to="/">
            <img className={Styles.logo} src={logo} alt="Logo" />
          </Link>

          {/* Links */}
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
          </nav>
        </div>
      </aside>
    </header>
  );
}

export default HamburgerMenu;
