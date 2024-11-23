import React, { useEffect, useState } from "react";
import { downloadPDFTable, downloadHTMLFile, downloadPDFasList } from "../utils/download.js";
import { copySelected } from "../utils/copy-method.js";
import changeTheme from "../utils/theme-settings.js";
import filterCommands from "../utils/filter-commands.js";
import Alert from "../utils/alert-message.js";
import Swal from "sweetalert2";

function Header({ commandsListHTMLRef, commandsListRef, setFilteredCommands, filteredCommands, selectedCommands, setSelectedCommands }) {
	const [searchQuery, setSearchQuery] = useState("");
	const [isDark, setIsDark] = useState(false);
	const [selectedOption, setSelectedOption] = useState("Download PDF List");

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

	const handleChange = async (event) => {
		let selectedValue = event.target.value;
		if (!event.target.value) {
			const inputOptions = {
				tablePdf: "Download PDF Table",
				listPdf: "Download PDF List",
				listHtml: "Download HTML List"
			};
			const { value: downloadType } = await Swal.fire({
				title: "Select Download Type",
				input: "select",
				inputOptions,
				showCancelButton: false,
				showCloseButton: true,
				inputValidator: (value) => {
					return new Promise((resolve) => {
						resolve();
					});
				}
			});
			selectedValue = inputOptions[downloadType];
		}

		console.log(selectedValue);
		setSelectedOption(selectedValue);
	};

	const handleDownload = () => {
		try {
			Swal.fire({
				position: "center",
				icon: "info",
				title: "Download Started for " + selectedOption,
				showConfirmButton: false,
				timer: 1000
			});
			switch (selectedOption) {
				case "Download PDF Table":
					downloadPDFTable(selectedCommands.length > 0 ? selectedCommands : filteredCommands);
					break;
				case "Download PDF List":
					downloadPDFasList(commandsListRef);
					break;
				case "Download HTML List":
					downloadHTMLFile(commandsListHTMLRef);
					break;
				default:
					throw new Error("Unknown Download Type: ");
			}
			Swal.fire({
				position: "center",
				icon: "success",
				title: "File downloaded for " + selectedOption,
				showConfirmButton: false,
				timer: 1000
			});
		} catch (error) {
			Swal.fire({ position: "center", icon: "error", title: error.message, showConfirmButton: true });
		}
	};

	return (
		<header className="search-container">
			<input type="search" placeholder="Type `basic commands` Or Search commands..." value={searchQuery} onChange={handleSearchChange} />
			<div className="selection-buttons">
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
				<abbr title="Download">
					<img src="/download.png" alt="Download" className="header-icon" onClick={handleDownload} />
				</abbr>

				{/* Select Dropdown for large screens */}
				<select className="select-dropdown" value={selectedOption} onChange={handleChange}>
					<option>Download PDF Table</option>
					<option>Download PDF List</option>
					<option>Download HTML List</option>
				</select>

				{/* Hamburger Menu for small screens */}
				<div className="hamburger-menu" onClick={handleChange}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</header>
	);
}

export default Header;
