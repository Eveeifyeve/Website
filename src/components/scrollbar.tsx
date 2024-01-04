import { useState } from "react";
import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import "../styles/scrollbar.css";

// kick off the polyfill!
smoothscroll.polyfill();

const Scrollbar = () => {
	const [showScroll] = useState(true); // set to true
	const [currentImage, setCurrentImage] = useState("../assets/react.svg");
	const [atTop, setAtTop] = useState(false);

	const scrollTop = () => {
		window.scroll({ top: 0, left: 0, behavior: "smooth" });
		setCurrentImage("https://github.com/Eveeifyeve.png"); // switch to the rocket image
		setAtTop(true);
	};

	const scrollDown = () => {
		window.scroll({
			top: document.body.scrollHeight,
			left: 0,
			behavior: "smooth",
		});
		setCurrentImage("../assets/react.svg"); // switch to the rocket image
		setAtTop(false);
	};

	return (
		<div className="scrollbar-container">
			<button
				type="button"
				onClick={atTop ? scrollDown : scrollTop}
				onKeyDown={(event) => {
					if (event.key === "Enter") {
						atTop ? scrollDown() : scrollTop();
					}
				}}
			>
				<img
					src={currentImage}
					alt="Scroll to top"
					className={`scrollTop ${atTop ? "at-top" : ""}`}
					style={{ height: 50, display: showScroll ? "flex" : "none" }}
				/>
			</button>
		</div>
	);
};

export default Scrollbar;
