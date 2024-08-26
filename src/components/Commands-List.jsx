import React, { useState, useEffect } from "react";
import gitCommands from "../commandsData.js";
import CommandCard from "./Command-Card.jsx";
import download from "../utils/download.js";
import Swal from "sweetalert2";
const options = {
	position: "center",
	icon: "success",
	title: "",
	showConfirmButton: false,
	timer: 2000
};
const GitCommandsList = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCommands, setSelectedCommands] = useState([]);
	const [showScrollTop, setShowScrollTop] = useState(false);

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const handleSelect = (command) => {
		setSelectedCommands((prevSelected) => (prevSelected.includes(command) ? prevSelected.filter((c) => c !== command) : [...prevSelected, command]));
	};

	const copySelected = () => {
		const selectedCode = selectedCommands.map((c) => c.code).join("\n");
		navigator.clipboard
			.writeText(selectedCode)
			.then(() => {
				Swal.fire({
					...options,
					title: "Selected code copied to clipboard!"
				});
			})
			.catch(() => {
				Swal.fire({
					...options,
					icon: "error",
					title: "Failed to copy selected code."
				});
			});
	};

	const selectAll = () => {
		setSelectedCommands(filteredCommands);
	};

	const unselectAll = () => {
		setSelectedCommands([]);
	};

	const filteredCommands = gitCommands.filter((command) => {
		const query = searchQuery.toLowerCase();
		const { code, name, description } = command;
		return [name, description, code].some((cmd) => cmd.toLowerCase().includes(query));
	});

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 300); // Adjust the scroll position threshold as needed
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="blog-container">
			<header className="search-container">
				<input
					type="search"
					placeholder="Search commands..."
					value={searchQuery}
					onChange={handleSearchChange}
				/>
				<div className="selection-buttons">
					<abbr title="Download">
						<img
							src="/download.png"
							alt="Download"
							className="header-icon"
							onClick={() => download(selectedCommands.length > 0 ? selectedCommands : filteredCommands)}
						/>
					</abbr>
					{selectedCommands.length >= 2 && (
						<abbr title="Copy">
							<img
								src="/copy.png"
								alt="Copy Selected"
								className="header-icon"
								onClick={copySelected}
							/>
						</abbr>
					)}
					<abbr title="Select All">
						<img
							src="/select.png"
							alt="Select All"
							className="header-icon"
							onClick={selectAll}
						/>
					</abbr>
					<abbr title="Unselect All">
						<img
							src="/delete.png"
							alt="Unselect All"
							className="header-icon"
							onClick={unselectAll}
						/>
					</abbr>
				</div>
			</header>

			<div className="commands-list">
				{filteredCommands.map((command, index) => (
					<CommandCard
						key={index}
						command={command}
						onSelect={handleSelect}
						selected={selectedCommands.includes(command)}
					/>
				))}
			</div>

			<br />
			<footer>
				<h3>Developer and Author - Majid Ali</h3>
				{showScrollTop && (
					<abbr title="Move to top">
						<img
							src="/top.png"
							className="header-icon"
							onClick={scrollToTop}></img>
					</abbr>
				)}
			</footer>
		</div>
	);
};

export default GitCommandsList;