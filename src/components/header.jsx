import React, { useEffect, useState } from "react";
import download from "../utils/download.js";
import { copySelected } from "../utils/copy-method.js";
import changeTheme from "../utils/theme-settings.js";
import filterCommands from "../utils/filter-commands.js";
import Alert from "../utils/alert-message.js";

function Header({ filteredCommands, setFilteredCommands, selectedCommands, setSelectedCommands }) {
	const [searchQuery, setSearchQuery] = useState("");
	const [isDark, setIsDark] = useState(false);

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const selectAll = () => {
		setSelectedCommands(filteredCommands);
		Alert("All commands selected!");
	};

	const unselectAll = () => {
		setSelectedCommands([]);
		Alert("All commands unselected!");
	};

	useEffect(() => {
		setFilteredCommands(filterCommands(searchQuery));
	}, [searchQuery]);

	return (
		<header className="search-container">
			<input type="search" placeholder="Type `basic commands` Or Search commands..." value={searchQuery} onChange={handleSearchChange} />
			<div className="selection-buttons">
				<abbr title="Download">
					<img src="/download.png" alt="Download" className="header-icon" onClick={() => download(selectedCommands.length > 0 ? selectedCommands : filteredCommands)} />
				</abbr>
				{selectedCommands.length >= 2 && (
					<abbr title="Copy">
						<img src="/copy.png" alt="Copy Selected" className="header-icon" onClick={() => copySelected(selectedCommands)} />
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
					{!isDark && <img className="header-icon theme" src="/dark.png" alt="Theme" onClick={() => changeTheme("dark", setIsDark)} />}
					{isDark && <img className="header-icon theme" src="/light.png" alt="Theme" onClick={() => changeTheme("light", setIsDark)} />}
				</abbr>
			</div>
		</header>
	);
}

export default Header;
