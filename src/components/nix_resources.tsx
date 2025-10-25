import { useEffect } from "react";

export interface Resource {
	id: string;
	name: string;
	url: string;
	key: string;
	other?: boolean;
}

interface Props {
	resources: Resource[];
}

export default function NixResources({ resources }: Props) {
	useEffect(() => {
		const keyMap = Object.fromEntries(resources.map(r => [r.key.toLowerCase(), r.url]));
		let buffer: string[] = [];
		let lastKeyTime = 0;

		const handleKey = (event: KeyboardEvent) => {
			const currentTime = Date.now();
			if (currentTime - lastKeyTime > 1000) buffer = []; // Reset after 1s inactivity
			lastKeyTime = currentTime;

			buffer.push(event.key.toLowerCase());
			if (buffer.length > 3) buffer.shift(); // keep max last 3 keys

			const str = buffer.join('');
			if (keyMap[str]) {
				window.location.href = keyMap[str];
			}
		};

		window.addEventListener("keydown", handleKey);
		return () => window.removeEventListener("keydown", handleKey);
	}, [resources]);

	const coreResources = resources.filter(r => !r.other);
	const otherResources = resources.filter(r => r.other);

	return (
		<div className="justify-center mt-5 content-center flex flex-col text-center gap-3 mx-auto w-full">
			<h2 className="font-bold text-xl">Core Resources</h2>
			<ul>
				{coreResources.map(r => (
					<li key={r.id}>
						<a className="text-blue-200 hover:text-blue-600" href={r.url}>
							{r.name}
						</a>
						<span className="text-neutral-300"> ({r.key})</span>
					</li>
				))}
			</ul>

			<h2 className="font-bold text-xl">Other Resources</h2>
			<ul>
				{otherResources.map(r => (
					<li key={r.id}>
						<a className="text-blue-200 hover:text-blue-600" href={r.url}>
							{r.name}
						</a>
						<span className="text-neutral-300"> ({r.key})</span>
					</li>
				))}
			</ul>
		</div>
	);
}

