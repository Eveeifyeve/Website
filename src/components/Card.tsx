import React from "react";
import "../stylesheets/card.css";

const Card1 = ({ h3, p }: { h3: string; p: string }) => {
	return (
		<div className="left flex justify-center">
			<div className="heroAnnouncementOuter relative min-w-[40%] max-w-[1000px] p-4 mt-32 overflow-hidden bg-gradient-to-r from-purple-900 via-blue-500 to-purple-900 rounded-xl shadow-lg">
				<div className="heroAnnouncementGradient absolute inset-0 h-full bg-conic-gradient filter blur-[8px] rounded-xl animate-heroDisco" />
				<div className="heroAnnouncement relative z-10 flex items-center p-20 bg-gradient-to-r from-purple-900 via-blue-500 to-purple-900 border border-white rounded-lg">
					<div className="flex-grow">
						<h3 className="font-jetbrains-mono text-white text-2xl">{h3}</h3>
						<p className="font-jetbrains-mono text-white text-xl">{p}</p>
					</div>
					<a
						href="/donate"
						className="heroReadMore flex items-center justify-center ml-2 text-sm text-cyan-500 rounded-lg no-underline hover:bg-gradient-to-r from-purple-200 to-blue-500 transition-colors duration-200"
					>
						<span className="mr-2">Donate</span>
					</a>
				</div>
			</div>
			<div className="right" />
		</div>
	);
};

export default Card1;
