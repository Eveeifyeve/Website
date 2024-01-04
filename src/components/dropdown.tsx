import React, { useState } from "react";
import { Link } from "react-router-dom";

interface DropdownProps {
	label: string;
	items: { name: string; link: string; theme?: string }[];
	href?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<li
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
			className="dropdown flex-col relative hover:flex hover:flex-col"
		>
			<Link to={""}>
				<span className="dropdown-label text-white no-underline p-2 border-none items-center bg-transparent">
					{label}
				</span>
			</Link>
			{isOpen && (
				<div className="dropdown-content hover:flex hover:flex-col">
					{items.map((item) => (
						<Link
							key={item.name}
							className={`text-white no-underline p-2 border-none items-center w-[100px] bg-transparent ${
								item.theme || ""
							}`}
							to={item.link}
						>
							{item.name}
						</Link>
					))}
				</div>
			)}
		</li>
	);
};

export default Dropdown;
