import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import html2pdf from "html2pdf.js";

const FILE_NAME = "git-commands-by-Majid-Ali";
// Utility function: Add footer
const addFooter = (doc, pageCount) => {
	const dev = "Developer and Author - Majid Ali";
	const footerText = `Page No. ${pageCount} - ${dev}`;
	const pageWidth = doc.internal.pageSize.width;
	const textWidth = doc.getTextWidth(footerText);
	const x = (pageWidth - textWidth) / 2;
	const y = doc.internal.pageSize.height - 10;

	doc.setFontSize(10);
	doc.setFont("Helvetica", "normal");
	doc.textWithLink(footerText, x + 30, y, { url: "https://majidev.netlify.app/" });
};

// Utility function: Get styles from the document
const getStyles = () => {
	return Array.from(document.styleSheets)
		.map((styleSheet) => {
			try {
				return Array.from(styleSheet.cssRules)
					.map((rule) => rule.cssText)
					.join("\n");
			} catch (e) {
				console.warn("Could not access stylesheet:", styleSheet, e);
				return "";
			}
		})
		.join("\n");
};

// Utility function: Temporarily hide elements
const toggleDisplay = (elements, display = "none") => {
	elements.forEach((el) => (el.style.display = display));
};

// Exported Functions
const downloadPDFTable = (filteredCommands) => {
	const doc = new jsPDF();
	let pageCount = 0;

	// Add header
	doc.setFontSize(18);
	doc.setFont("Helvetica", "bold");
	doc.text("Git Commands Table", 14, 15);

	// Define table content and styles
	const tableColumn = ["Name", "Description", "Example", "Code"];
	const tableRows = filteredCommands.map((command) => [command.name || "", command.description || "", command.example || "", command.code || ""]);
	const columnStyles = {
		0: { cellWidth: 50 },
		1: { cellWidth: 40 },
		2: { cellWidth: 40 },
		3: { cellWidth: 50 }
	};

	// Add table to PDF
	autoTable(doc, {
		head: [tableColumn],
		body: tableRows,
		startY: 30,
		columnStyles,
		theme: "grid",
		styles: { fontSize: 12, cellPadding: 3, overflow: "linebreak" },
		headStyles: { fillColor: [0, 100, 255], textColor: [255, 255, 255], fontSize: 14, fontStyle: "bold" },
		pageBreak: "auto",
		didDrawPage: (data) => {
			pageCount = data.pageNumber;
			addFooter(doc, pageCount);
		}
	});

	// Save the PDF
	doc.save(FILE_NAME + ".pdf");
};

const downloadHTMLFile = (commandsListHTMLRef) => {
	console.log("🚀 -> file: download.js:82 -> downloadHTMLFile -> commandsListHTMLRef:", commandsListHTMLRef);

	const element = commandsListHTMLRef.current;
	if (!element) return;

	const htmlContent = element.innerHTML;
	const styles = getStyles();

	const fullHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Commands List</title>
          <style>${styles}</style>
      </head>
      <body style="padding:10px 20px;">
          <div class="commands-list">${htmlContent}</div>
      </body>
      </html>
    `;

	const blob = new Blob([fullHTML], { type: "text/html" });
	const link = document.createElement("a");
	link.href = URL.createObjectURL(blob);
	link.download = FILE_NAME + ".html";
	link.click();
	URL.revokeObjectURL(link.href);
};

const downloadPDFasList = (commandsListRef) => {
	const element = commandsListRef.current;
	if (!element) return;

	// Configure html2pdf options
	const options = {
		margin: 0.5,
		filename: FILE_NAME + ".pdf",
		image: { type: "jpeg", quality: 2 },
		html2canvas: { scale: 2 },
		jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
	};

	// Temporary style adjustments
	const buttons = element.querySelectorAll("button");
	const checkboxes = element.querySelectorAll("input[type='checkbox']");
	toggleDisplay(buttons, "none");
	toggleDisplay(checkboxes, "none");

	// Add CSS to prevent page breaks within cards
	const style = document.createElement("style");
	style.innerHTML = `
      .commands-list * { page-break-inside: avoid; break-inside: avoid; }
      .commands-list .html2pdf__page-break { display: block; height: 0; page-break-before: always; }
    `;
	document.head.appendChild(style);

	// Generate the PDF
	html2pdf()
		.set(options)
		.from(element)
		.save()
		.finally(() => {
			// Restore original display styles
			toggleDisplay(buttons, "");
			toggleDisplay(checkboxes, "");
			document.head.removeChild(style);
		});
};

export { downloadPDFTable, downloadHTMLFile, downloadPDFasList };
