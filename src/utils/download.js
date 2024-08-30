import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const download = (filteredCommands) => {
	const doc = new jsPDF();
	const pageCount = { count: 0 }; // To keep track of page count

	// Function to add the footer to each page
	const addFooter = () => {
		const dev = "Developer and Author - Majid Ali";
		const footerText = `Page No. ${pageCount.count} - ${dev}`;
		const pageWidth = doc.internal.pageSize.width;
		const textWidth = doc.getTextWidth(footerText);
		const x = (pageWidth - textWidth) / 2;
		const y = doc.internal.pageSize.height - 10;

		doc.setFontSize(10);
		doc.setFont("Helvetica", "normal");
		doc.textWithLink(footerText, x+30, y, { url: "https://majidev.netlify.app/" });
	};
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
			pageCount.count = data.pageNumber; // Set current page number
			addFooter();
		}
	});

	doc.save("git-commands.pdf");
};

export default download;
