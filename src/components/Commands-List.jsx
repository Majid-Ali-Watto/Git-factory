import React, { useEffect, useState, useRef } from "react";
import CommandCard from "./Command-Card.jsx";
import Footer from "./footer.jsx";
import MustRead from "./must-read.jsx";
import LearnMoreLinks from "./learn-more-links.jsx";
import Header from "./header.jsx";

const GitCommandsList = () => {
	const [selectedCommands, setSelectedCommands] = useState([]);
	const [showScrollTop, setShowScrollTop] = useState(false);
	const [filteredCommands, setFilteredCommands] = useState([]);
	const commandsListRef = useRef();
	const commandsListHTMLRef = useRef();

	const handleSelect = (command) => {
		setSelectedCommands((prevSelected) => (prevSelected.includes(command) ? prevSelected.filter((c) => c !== command) : [...prevSelected, command]));
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
			<Header commandsListHTMLRef={commandsListHTMLRef} commandsListRef={commandsListRef} setFilteredCommands={setFilteredCommands} filteredCommands={filteredCommands} selectedCommands={selectedCommands} setSelectedCommands={setSelectedCommands} />
			<MustRead />
			<br />
			<div ref={commandsListHTMLRef}>
				<div className="commands-list" ref={commandsListRef}>
					{filteredCommands.map((command, index) => (
						<CommandCard key={index} command={command} onSelect={handleSelect} selected={selectedCommands.includes(command)} />
					))}
				</div>
				<LearnMoreLinks />
				<br />
				<Footer showScrollTop={showScrollTop} />
			</div>
		</div>
	);
};

export default GitCommandsList;
