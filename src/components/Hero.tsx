import React from "react";
import Gravatar from "react-gravatar";

const description =
	"I am a friendly programmer that has many projects and knows a lot of coding languages.";

const Hero = () => {
	return (
		<>
			<div className="flex items-center align-center justify-center w-screen">
				<div className="flex flex-col text-center">
					<h1 className="text-center">About Eveeify</h1>
					<Gravatar
						email="eveeg1971@gmail.com"
						size={250}
						rating="pg"
						alt="Eveeifyeve Image"
						default="monsterid"
						draggable={false}
						className="self-center rounded-xl border-4 border-slate-500"
					/>
					<p>{description}</p>
				</div>
			</div>
		</>
	);
};

export default Hero;
