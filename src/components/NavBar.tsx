import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import "../styles/navBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown from "./dropdown";
import CustomSelect from "./customserlect";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  // Define themes
  const themes = useMemo(() => ["japan", "eevee", "theme1", "demon"], []);

  // State for theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "japan");

  // Define projects
  const projects = useMemo(() => [
    { name: 'TeaClient', link: 'https://teaclient.net', theme: 'hover:bg-purple-500', logo: 'https://teaclient.net/icon.webp' },
    { name: 'OpusClient', link: '/project2', theme: 'hover:bg-white', logo: 'https://opusclient.com/lmao.png' },
    // Add more projects here
  ], []);

  // Define socials
  const socials = [
    { name: "Github", link: "https://github.com/eveeifyeve", theme: "" },
  ];

  // Define links
  const links = [
    { name: "Home", path: "/" },
    { name: "Security", path: "/security" },
    // Add more links here
  ];

  // Effect for setting body class and local storage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="nav-bar">
      <nav>
        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          {links.map((link, index) => (
            <li key={index}>
              <Link className="nav-link" to={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
          <Dropdown label="Projects" items={projects} />
          <Dropdown label="Socials" items={socials} />
          <li>
            <CustomSelect
              options={themes}
              value={theme}
              onChange={(value: string) => setTheme(value)}
            />
          </li>
        </ul>
        <button
          className="hamburger lg:hidden"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          <GiHamburgerMenu size="20px" />
        </button>
      </nav>
    </div>
  );
};

export default NavBar;