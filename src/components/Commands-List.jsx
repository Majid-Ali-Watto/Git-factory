import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import gitCommands from "../assets/commandsData.js";
import { options, themeStatus } from "../assets/themeAndOptions.js";
import download from "../utils/download.js";
import CommandCard from "./Command-Card.jsx";
import showArea from "../utils/gitFirstTimeGuide.js";

const GitCommandsList = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCommands, setSelectedCommands] = useState([]);
	const [showScrollTop, setShowScrollTop] = useState(false);
	const [isDark, setIsDark] = useState(false);

	function changeTheme(theme) {
		setIsDark((prev) => !prev);
		const root = document.getElementById("root");
		root.style.backgroundColor = themeStatus[theme].bg;
		root.style.color = themeStatus[theme].text;
	}

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
		Swal.fire({
			...options,
			title: "All commands selected!"
		});
	};

	const unselectAll = () => {
		setSelectedCommands([]);
		Swal.fire({
			...options,
			title: "All commands unselected!"
		});
	};

	const filteredCommands = gitCommands.filter((command) => {
		const query = searchQuery.toLowerCase();
		const { code, name, description, basic } = command;
		return [name, description, code, basic].some((cmd) => cmd?.toLowerCase()?.includes(query));
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
				<input type="search" placeholder="Type `basic commands` Or Search commands..." value={searchQuery} onChange={handleSearchChange} />
				<div className="selection-buttons">
					<abbr title="Download">
						<img src="/download.png" alt="Download" className="header-icon" onClick={() => download(selectedCommands.length > 0 ? selectedCommands : filteredCommands)} />
					</abbr>
					{selectedCommands.length >= 2 && (
						<abbr title="Copy">
							<img src="/copy.png" alt="Copy Selected" className="header-icon" onClick={copySelected} />
						</abbr>
					)}
					<abbr title="Select All">
						<img src="/select.png" alt="Select All" className="header-icon" onClick={selectAll} />
					</abbr>
					{selectedCommands.length >= 2 && (
						<abbr title="Unselect All">
							<img src="/delete.png" alt="Unselect All" className="header-icon" onClick={unselectAll} />
						</abbr>
					)}
					<abbr title="Change Theme">
						{!isDark && <img className="header-icon theme" src="/dark.png" alt="Theme" onClick={() => changeTheme("dark")} />}
						{isDark && <img className="header-icon theme" src="/light.png" alt="Theme" onClick={() => changeTheme("light")} />}
					</abbr>
				</div>
			</header>
			<div>
				<ul>
					<li className="must-read">
						<strong onClick={showArea}>Must Read </strong>
						<h5>Guide to Push for first time</h5>
					</li>
				</ul>
			</div>
			<br />
			<div className="commands-list">
				{filteredCommands.map((command, index) => (
					<CommandCard key={index} command={command} onSelect={handleSelect} selected={selectedCommands.includes(command)} />
				))}
			</div>

			<div className="learnMore">
				<span>If you want to learn more about Git,</span>
				<a href="https://www.atlassian.com/git" target="_blank">
					Click Here
				</a>
			</div>
			<br />
			<footer>
				<h3>
					Developer and Author -
					<a target="_blank" href="https://majidev.netlify.app/">
						Majid Ali
					</a>
				</h3>
				{showScrollTop && (
					<abbr title="Move to top">
						<img src="/top.png" className="header-icon" onClick={scrollToTop}></img>
					</abbr>
				)}
			</footer>
		</div>
	);
};

export default GitCommandsList;
