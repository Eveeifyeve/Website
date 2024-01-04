import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";
import toast from "react-hot-toast";
import { FaRedoAlt } from "react-icons/fa";
import { LanyardResponse, useLanyard } from "react-use-lanyard";

const DiscordStatus = () => {
	const [data, setData] = useState<LanyardResponse | null>(null);
	const lanyardResponse = useLanyard({ userId: "639720838635061248" });

	const fetchData = useCallback(async () => {
		setData(lanyardResponse.data || null);
	}, [lanyardResponse]);
	const ButtonfetchData = useCallback(async () => {
		setData(lanyardResponse.data || null);
		setTimeout(() => {
			if (data) toast.success("Fetching data");
			else toast.error("Failed to fetch data");
		}, 2000);
	}, [data, lanyardResponse.data]);

	useEffect(() => {
		fetchData();
		const intervalId = setInterval(fetchData, 1000); // Fetch data every second

		return () => clearInterval(intervalId); // Clean up on component unmount
	}, [fetchData]);

	const status = data?.data.discord_status;
	const username = data?.data.discord_user.username || "Unknown";
	const activity = data?.data.activities || "Unknown";

	const borderColor = `${
		status === "online"
			? "emerald-500"
			: status === "dnd"
			  ? "red-500"
			  : status === "idle"
				  ? "yellow-500"
				  : "gray-500"
	}`;
	let avatarUrl = "url_of_default_avatar";
	if (username !== "Unknown") {
		avatarUrl = `https://cdn.discordapp.com/avatars/${data?.data.discord_user.id}/${data?.data.discord_user.avatar}.png?size=1024`;
	}

	let bgClass;
	switch (borderColor) {
		case "emerald-500":
			bgClass = "bg-emerald-500";
			break;
		case "red-500":
			bgClass = "bg-red-500";
			break;
		case "yellow-500":
			bgClass = "bg-yellow-500";
			break;
		default:
			bgClass = "bg-gray-500";
	}

	let boxWidth = "w-[100px]";
	if (
		typeof activity === "object" &&
		activity !== null &&
		activity[0] &&
		activity[0].name === "Spotify"
	) {
		boxWidth = "w-[210px]";
	}

	let activityNameColor = "text-white";
	if (
		typeof activity === "object" &&
		activity !== null &&
		activity[0] &&
		(activity[0].name === "Code" || activity[0].name === "Neovim")
	) {
		activityNameColor = "text-red-500";
	}

	let borderClass;
	if (borderColor === "emerald-500") {
		borderClass = "border-emerald-500";
	} else if (borderColor === "red-500") {
		borderClass = "border-red-500";
	} else if (borderColor === "yellow-500") {
		borderClass = "border-yellow-500";
	} else {
		borderClass = "border-gray-500";
	}

	const handleClick1 = () => {
		const now = Date.now();
		if (now - lastFetchTime.current >= 2000) {
			// 2000ms = 2s
			ButtonfetchData();
			lastFetchTime.current = now;
		} else {
			toast.error("Hey, slow down!");
		}
	};

	const lastFetchTime = useRef(Date.now());

	return (
		<div
			className={`flex items-center absolute border rounded-lg bg-zinc-800 p-2 m-2 top-0 left-0 h-2/7 md:w-[300px] ${borderClass} `}
		>
			<div className="relative">
				<img
					src={avatarUrl}
					alt="Discord Avatar"
					draggable="false"
					className={"w-12 h-12 rounded-full ml-2"}
					onError={(e) => {
						(e.target as HTMLImageElement).src = "url_of_default_image";
					}}
				/>
				<div
					className={`flex absolute right-0 bottom-0 w-4 h-4 rounded-full ${bgClass}`}
				/>
			</div>
			<div className="flex flex-col ml-2">
				<h1 className="text-white font-bold text-sm text-center">{username}</h1>
				<div className={"rounded-lg items-center text-center text-xs p-1 w-12"}>
					<p className={"font-bold text-zinc-500 text-sm"}>{status}</p>
					<p
						className={`hidden md:flex text-white bg-zinc-700 justify-center text-center ${boxWidth} rounded-md h-8 p-0 mt-5`}
					>
						{activity?.[0] &&
						typeof activity[0] === "object" &&
						activity[0].name &&
						(activity[0].name.includes("Code") ||
							activity[0].name.includes("Neovim")) ? (
							<span className={`${activityNameColor} text-center`}>Busy</span>
						) : activity?.[0] &&
						  typeof activity[0] === "object" &&
						  activity[0].name === "Spotify" ? (
							<span
								className={`${activityNameColor} text-center pl-2 pr-2`}
							>{`Playing: ${activity[0].details}`}</span>
						) : activity?.[0] &&
						  typeof activity[0] === "object" &&
						  activity[0].state ? (
							<span
								className={`${activityNameColor} text-center`}
							>{`${activity[0].state}`}</span>
						) : (
							"No Activity...."
						)}
					</p>
				</div>
			</div>

			<div
				style={{ position: "absolute", bottom: 3, right: 3, cursor: "pointer" }}
				onClick={handleClick1}
				onKeyPress={handleClick1}
				draggable="true"
			>
				<FaRedoAlt size={20} color="white" />
			</div>
		</div>
	);
};

export default DiscordStatus;
