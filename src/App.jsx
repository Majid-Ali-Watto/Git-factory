import "./App.css";
import React, { useState } from "react";
import gitCommands from "./commandsData.js";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const GitCommand = ({ command }) => {
	return (
		<div className="command">
			<h2>{command.name}</h2>
			<p>
				<strong>Description:</strong> {command.description}
			</p>
			<p>
				<strong>Example:</strong> {command.example}
			</p>
			<code>{command.code}</code>
		</div>
	);
};

const GitCommandsBlog = ({ commands }) => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const filteredCommands = commands.filter((command) => {
		const query = searchQuery.toLowerCase();
		const { code, name, description } = command;
		return [name, description, code].some((cmd) => cmd.toLowerCase().includes(query));
	});

	const download = () => {
		const doc = new jsPDF();

		// Header
		const headerText = "Git Commands List";
		doc.setFontSize(18);
		doc.setFont("Helvetica", "bold");
		doc.text(headerText, 14, 15);

		// Define column headers and rows
		const tableColumn = ["Name", "Description", "Example", "Code"];
		const tableRows = filteredCommands.map((command) => [command.name, command.description, command.example, command.code]);

		// Define column widths
		const columnStyles = {
			0: { cellWidth: 50, halign: "left" },
			1: { cellWidth: 40, halign: "left" },
			2: { cellWidth: 40, halign: "left" },
			3: { cellWidth: 50, halign: "left" }
		};

		// Add the table to the PDF document
		autoTable(doc, {
			head: [tableColumn],
			body: tableRows,
			startY: 30,
			columnStyles: columnStyles,
			theme: "grid",
			styles: {
				fontSize: 12,
				cellPadding: 3,
				overflow: "linebreak"
			},
			headStyles: {
				fillColor: [0, 100, 255],
				textColor: [255, 255, 255],
				fontSize: 14,
				fontStyle: "bold"
			},
			margin: { right: 10 },
			pageBreak: "auto",
			didDrawPage: (data) => {
				const dev = "Developer and Author - Majid Ali";
				const footerText = `Page ${data.pageNumber} of ${data.pageCount}\t\t\t\t\t${dev}`;
				doc.setFontSize(10);
				doc.setFont("Helvetica", "normal");
				doc.text(footerText, 14, doc.internal.pageSize.height - 10);
			}
		});
		doc.save("git-commands.pdf");
	};

	return (
		<div className="blog-container">
			<header className="search-container">
				<input
					type="text"
					placeholder="Search commands..."
					value={searchQuery}
					onChange={handleSearchChange}
				/>
				<button onClick={download}>Download</button>
			</header>

			<div className="commands-list">
				{filteredCommands.map((command, index) => (
					<GitCommand
						key={index}
						command={command}
					/>
				))}
			</div>
			<footer>
				<h3>Developer and Author - Majid Ali</h3>
			</footer>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<GitCommandsBlog commands={gitCommands} />
		</div>
	);
};

export default App;
