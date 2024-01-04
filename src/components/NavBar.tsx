import { useEffect, useMemo, useState } from "react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import "../styles/navBar.css";
import CustomSelect from "./customserlect";

const NavBar = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	// Define themes
	const themes = useMemo(() => ["japan", "eevee", "theme1", "demon"], []);

	// State for theme
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "japan");

	// Define links
	const links = [
		{ name: "Home", path: "/" },
		{ name: "Security", path: "/security" },
		{ name: "Socials", path: "/socials" },
		{ name: "Projects", path: "/projects" },
		// Add more links here
	];

	// Effect for setting body class and local storage
	useEffect(() => {
		document.body.className = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);

	const location = useLocation();

	return (
		<div className="fixed flex top-0 right-0 p-4  justify-end">
			<nav>
				<ul
					className={`nav-links hidden lg:flex relative bg-clip-padding backdrop-blur-2xl rounded-lg justify-center flex-row border-transparent h-[50px] ${
						isMenuOpen ? "show" : ""
					}`}
				>
					{links.map((link) => (
						<li key={link.path}>
							<Link
								className={`nav-link text-white no-underline p-2 border-none items-center bg-transparent ${
									location.pathname === link.path ? "active" : ""
								}`}
								to={link.path}
							>
								{link.name}
							</Link>
						</li>
					))}
					<li>
						<CustomSelect
							options={themes}
							value={theme}
							onChange={(value: string) => setTheme(value)}
						/>
					</li>
				</ul>
				<button
					type="button"
					className="hamburger block lg:hidden items-center justify-center"
					onClick={() => setMenuOpen(!isMenuOpen)}
				>
					<GiHamburgerMenu size="20px" />
				</button>
			</nav>
		</div>
	);
};

export default NavBar;
