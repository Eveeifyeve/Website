import React from "react";
import { Toaster } from "react-hot-toast";
import NavBar from "../components/NavBar";
import DiscordStatus from "../components/profile";
import Scrollbar from "../components/scrollbar"; // import the Scrollbar component

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div>
			<Toaster
				toastOptions={{ style: { background: "#18181B", color: "#fff" } }}
			/>
			{children}
			<DiscordStatus />
			<NavBar />
			<Scrollbar />
		</div>
	);
};
export default Layout;
