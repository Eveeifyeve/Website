import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/deafult";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Security from "./pages/security";
import Socials from "./pages/socials";

function App() {
	const metaData = {
		name: "Eveeifyeve Website",
		description: "A friendly programmer that has many projects.",
		image: "https://github.com/Eveeifyeve.png",
		themeColor: "#e0503a",
	};

	return (
		<Router>
			<HelmetProvider>
				<title>{metaData.name}</title>
				<meta name="description" content={metaData.description} />
				<meta property="og:title" content={metaData.name} />
				<meta property="og:description" content={metaData.description} />
				<meta property="og:image" content={metaData.image} />
				<meta property="og:image:alt" content="The image of Eveeifyeve" />
				<meta name="theme-color" content={metaData.themeColor} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={metaData.themeColor}
				/>
				<meta
					name="msapplication-navbutton-color"
					content={metaData.themeColor}
				/>
			</HelmetProvider>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/socials" element={<Socials />} />
					<Route path="/security" element={<Security />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</Layout>
		</Router>
	);
}
export default App;
