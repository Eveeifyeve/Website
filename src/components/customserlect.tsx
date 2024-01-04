import React, { useState } from "react";

const CustomSelect = ({
	options,
	value,
	onChange,
}: {
	options: string[];
	value: string;
	onChange: (value: string) => void;
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue((event.target as HTMLInputElement).value);
	};

	const handleOptionClick = (option: string) => {
		onChange(option);
		setInputValue("");
	};

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="flex flex-row justify-center items-center text-white rounded-md px-2 py-1">
				{value && <span className="flex items-center">{value}</span>}
				{!value && (
					<span className="text-white text-base font-light">Select...</span>
				)}
				<input
					type="text"
					className="focus:outline-none"
					value={inputValue}
					onChange={handleInputChange}
					style={{ display: isHovered && value === "" ? "block" : "none" }}
				/>
			</div>
			{isHovered && (
				<div className="mt-2 text-white border rounded-md shadow-md">
					{options.map((option) => (
						<div
							key={option}
							className="cursor-pointer hover:text-black hover:bg-gray-100 px-2 py-1"
							onClick={() => handleOptionClick(option)}
							onKeyPress={(event) => {
								if (event.key === "Enter") {
									handleOptionClick(option);
								}
							}}
						>
							{option}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default CustomSelect;
